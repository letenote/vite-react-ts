import React, { lazy } from "react";
const LoginBackground = lazy(() => import("./child/LoginBackground"));
const LoginHeader = lazy(() => import("./child/LoginHeader"));
const LoginForms = lazy(() => import("./child/LoginForms"));
const Grid = lazy(() => import("@mui/material/Grid"));
const Box = lazy(() => import("@mui/material/Box"));
const Typography = lazy(() => import("@mui/material/Typography"));

const Login = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <LoginBackground />
      <Grid item xs={12} sm={8} md={4} sx={{ backgroundColor: "#fff" }}>
        <Box
          sx={{
            my: 11,
            mx: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LoginHeader />
          <LoginForms />
          <Typography align="center" sx={{ mt: 5 }} variant="caption">
            Copyright © 2023 FWD Insurance. All right reserved.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const MemoizedLogin = React.memo(Login, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedLogin;
