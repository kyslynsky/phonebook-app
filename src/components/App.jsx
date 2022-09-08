import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from 'components/GlobalStyles';
import { useGetCurrentUserQuery } from 'redux/auth/authApi';
import { Header } from 'components/Header';
import { PrivateRoutes } from 'components/PrivateRoutes';

const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));
const EditContactModal = lazy(() => import('components/EditContactModal'));

export const App = () => {
  const userToken = useSelector(state => state.auth.token);

  useGetCurrentUserQuery(undefined, {
    skip: !userToken,
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<PrivateRoutes />}>
            <Route index element={<Navigate to="/phonebook" />} />
            <Route path="phonebook/*" element={<PhonebookPage />}>
              <Route path="edit/:contactId" element={<EditContactModal />} />
            </Route>
          </Route>
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
