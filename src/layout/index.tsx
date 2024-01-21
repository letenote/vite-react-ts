import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Root } from '@mui-treasury/layout';
import Scheme from './scheme/index';
import CssBaseline from '@mui/material/CssBaseline';
import ContentLayout from './part/ContentLayout';
import FooterLayout from './part/FooterLayout';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const SidebarLayout = lazy(() => import('./part/SidebarLayout'));
const HeaderLayout = lazy(() => import('./part/HeaderLayout'));
const CircularProgress = lazy(() => import('@mui/material/CircularProgress'));

const Layout = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));
  const history = useLocation();
  const isLoginPage = history.pathname === '/login';
  const isDashboardPage = history.pathname === '/dashboard';
  if (isLoginPage) return <Outlet />;
  return (
    <Root scheme={Scheme}>
      <CssBaseline />
      <Suspense
        fallback={
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
        }
      >
        <HeaderLayout isXS={isXS} />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
        }
      >
        <SidebarLayout isXS={isXS} />
      </Suspense>
      <ContentLayout isDashboardPage={isDashboardPage}>
        <Outlet />
      </ContentLayout>
      <FooterLayout show={false} />
    </Root>
  );
};

export default Layout;
