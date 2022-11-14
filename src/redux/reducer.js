import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, filterContact } from './actions';

const initialContact = { contact: [] };

export const contactReduce = createReducer(initialContact, {
  [addContact]: (state, action) => {
    return { ...state, contact: [...state.contact, action.payload] };
  },
  [removeContact]: (state, action) => {
    return {
      ...state,
      contact: state.contact.filter(item => item.id !== action.payload),
    };
  },
});

const intitialFilter = { filter: '' };
export const filterReduce = createReducer(intitialFilter, {
  [filterContact]: (state, action) => {
    return { ...state, filter: action.payload };
  },
});

// Not use
