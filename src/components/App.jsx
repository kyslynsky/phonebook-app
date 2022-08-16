import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'components/GlobalStyles';
import { Header } from 'components/Header';

const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PhonebookPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
