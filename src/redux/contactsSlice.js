import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    });
  }
});

export default contactsSlice.reducer;
