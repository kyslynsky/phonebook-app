import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = () => {
  const userToken = useSelector(state => state.auth.token);

  return userToken ? <Outlet /> : <Navigate to="/login" replace />;
};
