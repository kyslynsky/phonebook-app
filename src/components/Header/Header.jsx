import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyles';
import * as S from './Header.styled';
import { Loader } from 'components/Loader';
import { UserMenu } from 'components/UserMenu';

export const Header = () => {
  const a = 1;

  return (
    <>
      <S.HeaderBar>
        <Container>
          <S.HeaderNav>
            {a ? (
              <S.NavItem to="/">Phonebook</S.NavItem>
            ) : (
              <S.NavItem disabled to="/">
                Phonebook
              </S.NavItem>
            )}
            <S.NavWrapper>
              <S.NavItem to="login">Login</S.NavItem>
              <S.NavItem to="signup">SignUp</S.NavItem>
              <UserMenu />
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
