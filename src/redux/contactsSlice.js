import { createSlice, nanoid } from '@reduxjs/toolkit';

import initialContacts from '../components/contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        return [...state, payload];
      },

      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// Selectors

// export const getContacts = store => store.contacts;

// export const getFilteredContacts = store => {
//   const { filter, contacts } = store;
//   if (!filter) {
//     return contacts;
//   }
//   const normalizedFilter = filter.toLowerCase();
//   const filteredContacts = contacts.filter(
//     ({ name, number }) =>
//       name.toLowerCase().trim().includes(normalizedFilter) ||
//       number.trim().includes(normalizedFilter)
//   );

//   if (normalizedFilter && !filteredContacts.length) {
//     toast.warn(`No contacts matching your request`, notifyOptions);
//   }
//   return filteredContacts;
// };
