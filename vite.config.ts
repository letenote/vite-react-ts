import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "FWD Training Budget App",
        short_name: "FWD Training Budget App",
        start_url: ".",
        display: "standalone",
        background_color: "#fff",
        description: "an application for managing training budgets",
        theme_color: "#ffffff",
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        navigateFallbackDenylist: [/^\/api/],
        globPatterns: [
          "**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,wav,mp3,gltf,bin,eot,ttf,woff,woff2}",
        ],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8080,
  },
  build: {
    outDir: "./build",
    emptyOutDir: true,
    sourcemap: "hidden",
    chunkSizeWarningLimit: 750,
    minify: "terser",
    cssMinify: "lightningcss",
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "js/[name]-fwd-[hash].js",
        chunkFileNames: "js/[name]-fwd-[hash].js",
        assetFileNames: "assets/[name]-fwd-[hash].[ext]",
      },
    },
  },
});
