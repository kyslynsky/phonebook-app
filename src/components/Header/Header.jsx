import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyles';
import * as S from './Header.styled';
import { Loader } from 'components/Loader';
import { UserMenu } from 'components/UserMenu';

export const Header = () => {
  const userToken = useSelector(state => state.auth.token);

  return (
    <>
      <S.HeaderBar>
        <Container>
          <S.HeaderNav>
            {userToken ? (
              <S.NavItem to="/">Phonebook</S.NavItem>
            ) : (
              <S.NavItem disabled to="/">
                Phonebook
              </S.NavItem>
            )}
            <S.NavWrapper>
              {userToken ? (
                <UserMenu />
              ) : (
                <>
                  <S.NavItem to="login">Login</S.NavItem>
                  <S.NavItem to="signup">SignUp</S.NavItem>
                </>
              )}
            </S.NavWrapper>
          </S.HeaderNav>
        </Container>
      </S.HeaderBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
