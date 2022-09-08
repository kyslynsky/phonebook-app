import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    name: null,
    email: null,
    token: null,
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signupUser.matchFulfilled,
      (state, { payload: { user, token } }) => {
        state.name = user.name;
        state.email = user.email;
        state.token = token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload: { user, token } }) => {
        state.name = user.name;
        state.email = user.email;
        state.token = token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
      }
    );
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.email = null;
      state.name = null;
      state.token = null;
    });
  },
});
