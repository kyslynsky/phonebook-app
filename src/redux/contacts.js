import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload: item }) => {
      state.items = [...state.items, item];
    },
    deleteContact: (state, { payload: itemId }) => {
      state.items = state.items.filter(item => item.id !== itemId);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
