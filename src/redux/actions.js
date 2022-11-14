import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const removeContact = createAction('contact/removeContact');

export const filterContact = createAction('filter/filterContact');

// Not use
