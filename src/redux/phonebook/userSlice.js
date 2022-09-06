import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    token: '',
  },
  reducers: {
    setCredentials(state, { payload: { user, token } }) {
      state.name = user.name;
      state.email = user.email;
      state.token = token;
    },
  },
});

export const { setCredentials } = userSlice.actions;
