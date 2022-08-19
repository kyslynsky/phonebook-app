import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'components/GlobalStyles';
import { Header } from 'components/Header';
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));
const EditContactModal = lazy(() => import('components/EditContactModal'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/phonebook" />} />
          <Route path="phonebook/*" element={<PhonebookPage />}>
            <Route path="edit/:contactId" element={<EditContactModal />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
