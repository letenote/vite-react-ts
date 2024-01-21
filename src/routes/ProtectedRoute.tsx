import { memo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store';

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = memo(({ children }: ProtectedRouteProps) => {
  const { user } = useAppSelector((state) => state.settings);
  const location = useLocation();
  console.log('DEBUG:ROUTE:PROTECTED', { location, user });

  if (!user.authed)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
});

export default ProtectedRoute;
