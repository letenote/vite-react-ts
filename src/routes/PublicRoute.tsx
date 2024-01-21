import { memo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

type PublicRouteProps = {
  children: JSX.Element;
};

const PublicRoute = memo(({ children }: PublicRouteProps) => {
  const { user } = useAppSelector((state) => state.settings);
  const location = useLocation();
  console.log('DEBUG:ROUTE:PUBLIC', {
    location,
    user,
    mode: import.meta.env.MODE,
  });

  if (user.authed) {
    if (!user.configLoaded)
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CircularProgress color={'primary'} style={{ marginTop: '50px' }} />
          <Typography align="center" sx={{ mt: 5 }} variant="body2">
            Please wait while preparing your data ...
          </Typography>
        </div>
      );
    if (user.configLoaded)
      return (
        <Navigate
          to={redirectAfterLogin(user.role)}
          state={{ from: location }}
          replace
        />
      );
  }

  if (location.pathname === '/' && !user.authed)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
});

const redirectAfterLogin = (role: string): string => {
  switch (role) {
    default:
      return '/dashboard';
  }
};

export default PublicRoute;
