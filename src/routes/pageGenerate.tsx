/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
const Dashboard = lazy(() => import("../containers/Dashboard/index"));
const Budget = lazy(() => import("../containers/Budget/index"));
// const Payment = lazy(() => import('../containers/Payment/index'));
const Settings = lazy(() => import("../containers/Settings/index"));
const Vendor = lazy(() => import("../containers/Vendor/index"));
const User = lazy(() => import("../containers/User/index"));
// const Monitoring = lazy(() => import('../containers/Monitoring/index'));
const Training = lazy(() => import("../containers/Training/index"));
const CreeateTraining = lazy(
  () => import("../containers/Training/create/index")
);

export const pageGenerate = (pageName: string): JSX.Element => {
  switch (pageName.toLowerCase()) {
    case "/dashboard":
      return <Dashboard />;
    case "/vendor":
      return <Vendor />;
    case "/setting":
      return <Settings />;
    // case '/monitoring':
    //   return <Monitoring />;
    // case '/payment':
    //   return <Payment />;
    case "/budget":
      return <Budget />;
    case "/user":
      return <User />;
    case "/training":
      return <Training />;
    case "/training/create":
      return <CreeateTraining />;
    default:
      return <div>...</div>;
  }
};
