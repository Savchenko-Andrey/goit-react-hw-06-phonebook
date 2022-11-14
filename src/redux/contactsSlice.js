import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialContact = { contact: [] };

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialContact,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contact.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      state.contact = state.contact.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

const persistConfig = {
  key: 'contact',
  storage,
};

export const presistContactReducer = persistReducer(
  persistConfig,
  contactReducer
);

// Selecotrs
export const getContact = state => state.contacts.contact;
