import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { registerSW } from "virtual:pwa-register";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./constant/Theme";
// registerSW({ immediate: true });

// replace console.* for disable log on production
if (import.meta.env.MODE === "PROD") {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
  console.debug = () => {};
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
