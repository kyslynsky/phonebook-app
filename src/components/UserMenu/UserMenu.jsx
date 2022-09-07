import { useLogoutMutation } from 'redux/phonebook/authApi';
import { Spinner } from 'components/Spinner';

export const UserMenu = () => {
  const [logoutUser, { isLoading }] = useLogoutMutation();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <>
      <div>User Email</div>
      <button disabled={isLoading} onClick={handleLogout}>
        {isLoading ? <Spinner size={15} /> : 'Logout'}
      </button>
    </>
  );
};
