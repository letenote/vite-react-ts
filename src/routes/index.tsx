import { Fragment, lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useRoutes, RouteObject } from "react-router-dom";
// import Layout from '../layout/index';
import { useAppSelector } from "../store";
import { MenuType } from "../store/slice/settings/user/interface/userReducerInterface.interface";
import { pageGenerate } from "./pageGenerate";

const LoadingScreen = lazy(() => import("../components/LoadingScreen"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
// const Login = lazy(() => import('../containers/Login/index'));
// const Page404 = lazy(() => import('../containers/Page404/index'));

const homeRoute: RouteObject = {
  path: "",
  element: (
    <PublicRoute>
      <p>home</p>
    </PublicRoute>
  ),
};

const loginRoute: RouteObject = {
  path: "login",
  element: (
    <PublicRoute>
      {/* <Login /> */}
      <div>login</div>
    </PublicRoute>
  ),
};

const page404Route: RouteObject = {
  path: "*",
  element: (
    <ProtectedRoute>
      {/* <Page404 /> */}
      <div>page404</div>
    </ProtectedRoute>
  ),
};

const defaultRoutes: RouteObject = {
  path: "",
  children: [homeRoute, loginRoute, page404Route],
};

const Core = () => {
  const { user } = useAppSelector((state) => state.settings);
  const [permission, setPermission] = useState<{
    loaded: boolean;
    data: RouteObject[];
  }>({
    loaded: false,
    data: user.authed ? [] : [defaultRoutes],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await permissionGenerate(user.config.menus);
      return data;
    };

    user.configLoaded &&
      fetchData().then(async (data) => {
        setPermission({
          loaded: true,
          data,
        });
      });
  }, [user]);

  return (
    <Fragment>
      <Routes>
        <Route
          element={
            user.authed && !permission.loaded ? (
              <LoadingScreen
                message={"Please wait, we are checking your data ..."}
              />
            ) : (
              // <Layout />
              <div>layout</div>
            )
          }
        >
          <Route
            path="/*"
            element={
              <Suspense fallback={""}>{useRoutes(permission.data)}</Suspense>
            }
          />
        </Route>
      </Routes>
    </Fragment>
  );
};

const permissionGenerate = async (
  menus: Array<MenuType>
): Promise<RouteObject[]> => {
  const _perm: RouteObject[] = [
    {
      path: "",
      children: [],
    },
  ];

  _perm[0].children = [...(_perm[0].children as []), homeRoute, loginRoute];

  menus.forEach((menu) => {
    menu.isParent &&
      menu.name.toLowerCase() !== "logout" &&
      _perm[0]?.children?.push({
        path: menu.name.toLowerCase(),
        children: [
          {
            path: "",
            element: <ProtectedRoute>{pageGenerate(menu.href)}</ProtectedRoute>,
          },
        ],
      });

    menu.isChild &&
      _perm[0]?.children?.forEach((child, childIndex) => {
        if (
          child.path?.toLowerCase() === menu.name.toLowerCase() &&
          _perm[0].children !== undefined
        ) {
          _perm[0].children[childIndex].children?.push({
            path: menu.href.split("/")[2],
            element: <ProtectedRoute>{pageGenerate(menu.href)}</ProtectedRoute>,
          });
        }
      });
  });

  _perm[0].children = [..._perm[0].children, page404Route];
  await new Promise((resolve) => setTimeout(resolve, 500));

  return Promise.resolve(_perm);
};

export default Core;
