import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyles';
import * as S from './Header.styled';
import { Loader } from 'components/Loader';

export const Header = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            <S.NavItem to="/">Phonebook</S.NavItem>
          </nav>
        </Container>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
