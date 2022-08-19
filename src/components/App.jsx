import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'components/GlobalStyles';
import { Header } from 'components/Header';
import { EditContactModal } from 'components/EditContactModal';

const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PhonebookPage />} />
          <Route path="edit/:contactId" element={<EditContactModal />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
