import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PrivateRoutes } from 'components/PrivateRoutes';
import { Header } from 'components/Header';

const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));
const EditContactModal = lazy(() => import('components/EditContactModal'));

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<PrivateRoutes />}>
            <Route index element={<Navigate to="/phonebook" />} />
            <Route path="phonebook/*" element={<PhonebookPage />}>
              <Route path="edit/:contactId" element={<EditContactModal />} />
            </Route>
          </Route>
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
