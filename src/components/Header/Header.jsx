import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyles';
import * as S from './Header.styled';

export const Header = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            <S.NavItem to="/">Contacts</S.NavItem>
          </nav>
        </Container>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
