import { createSlice } from '@reduxjs/toolkit';
const intitialFilter = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: intitialFilter,
  reducers: {
    filterContact: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

//  Selectors
export const getFilterSelector = state => state.filterContact.filter;
