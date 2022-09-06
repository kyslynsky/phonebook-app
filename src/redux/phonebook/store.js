import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from 'redux/phonebook/contactsSlice';
import { filterContactsSlice } from 'redux/phonebook/filterContactsSlice';
import { userSlice } from 'redux/phonebook/userSlice';
import { authApi } from 'redux/phonebook/authApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterContactsSlice.name]: filterContactsSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
