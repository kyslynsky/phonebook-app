import { Navigate } from 'react-router-dom';
import { useLogoutMutation } from 'redux/auth/authApi';
import { useSelector } from 'react-redux';
import { Spinner } from 'components/Spinner';
import * as message from 'features/notify/notify';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.auth.email);
  const [logoutUser, { isLoading }] = useLogoutMutation();

  const handleLogout = () => {
    logoutUser()
      .unwrap()
      .then(() => {
        window.location.reload(false);
        <Navigate to="/login" replace />;
      })
      .catch(() => message.failureNotice('Something went wrong'));
  };

  return (
    <>
      <div>{userEmail}</div>
      <button disabled={isLoading} onClick={handleLogout}>
        {isLoading ? <Spinner size={15} /> : 'Logout'}
      </button>
    </>
  );
};
