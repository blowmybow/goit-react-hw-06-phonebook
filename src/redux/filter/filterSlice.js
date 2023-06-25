import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducer: { setFilter: (_, { payload }) => payload },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

// Selectors

export const getFilter = store => store.filter;
