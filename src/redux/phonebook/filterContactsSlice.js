import { createSlice } from '@reduxjs/toolkit';

export const filterContactsSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    setFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { setFilter } = filterContactsSlice.actions;
