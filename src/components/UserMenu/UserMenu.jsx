import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'redux/auth/authApi';
import { useSelector } from 'react-redux';
import { Spinner } from 'components/Spinner';
import * as message from 'features/notify/notify';
import * as S from './UserMenu.styled';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.auth.email);
  const [logoutUser, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();

  const refreshNavigate = () => {
    navigate(0);
  };

  const handleLogout = () => {
    logoutUser()
      .unwrap()
      .then(() => {
        refreshNavigate();
        navigate('/login', { replace: true });
      })
      .catch(() => message.failureNotice('Something went wrong'));
  };

  return (
    <>
      <S.userMail>{userEmail}</S.userMail>
      <S.LogoutBtn disabled={isLoading} onClick={handleLogout}>
        {isLoading ? <Spinner size={15} /> : 'Logout'}
      </S.LogoutBtn>
    </>
  );
};
