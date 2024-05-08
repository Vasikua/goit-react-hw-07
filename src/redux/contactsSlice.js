
import { createSlice } from '@reduxjs/toolkit';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase()
      .addCase()
      .addCase()
  }
  // reducers: {
    
  //   fetchingInProgres(state) {
  //     state.isLoading(true);
  //    },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload; 
  //    },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   }

  // }
});

export const selectContacts = (state) => {
    return state.contacts.items;
   
};
export const {fetchingInProgres, fetchingSuccess, fetchingError } = contactsSlice.action;
// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
