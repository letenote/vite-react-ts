import { lazy, Suspense } from "react";
import { useAppSelector, useAppDispatch } from "./store";
import { setSnackbar } from "./store/slice/components/reducer/snackbar";
import { BrowserRouter } from "react-router-dom";
const Routes = lazy(() => import("./routes/index"));
const CircularProgress = lazy(() => import("@mui/material/CircularProgress"));
const Alert = lazy(() => import("@mui/material/Alert/Alert"));
const Snackbar = lazy(() => import("@mui/material/Snackbar"));
const CheckAuth = lazy(() => import("./components/CheckAuth"));

const App = () => {
  const getToken = localStorage.getItem("_token");
  const dispatch = useAppDispatch();
  const { snackbar } = useAppSelector((state) => state.components);
  const { user } = useAppSelector((state) => state.settings);
  const handleCloseSnackbar = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      setSnackbar({
        open: false,
        autoHideDuration: 0,
        severity: snackbar.severity,
        message: snackbar.message,
      })
    );
  };

  if (!user.authed && getToken !== null)
    return (
      <Suspense
        fallback={
          <CircularProgress color={"primary"} style={{ marginTop: "50px" }} />
        }
      >
        <CheckAuth />
      </Suspense>
    );

  return (
    <BrowserRouter>
      <Suspense fallback={""}>
        <Snackbar
          open={snackbar.open}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={snackbar.autoHideDuration}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
