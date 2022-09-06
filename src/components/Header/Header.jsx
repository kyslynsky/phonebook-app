import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyles';
import * as S from './Header.styled';
import { Loader } from 'components/Loader';

export const Header = () => {
  return (
    <>
      <S.HeaderBar>
        <Container>
          <S.HeaderNav>
            <S.NavItem to="/">Phonebook</S.NavItem>
            <S.NavWrapper>
              <S.NavItem to="login">Login</S.NavItem>
              <S.NavItem to="signup">SignUp</S.NavItem>
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
