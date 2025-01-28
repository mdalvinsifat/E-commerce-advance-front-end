// src/Redux/DialogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    loginDialogOpen: false,
    registerDialogOpen: false, // Add this property
  },
  reducers: {
    openLoginDialog: (state) => {
      state.loginDialogOpen = true;
    },
    closeLoginDialog: (state) => {
      state.loginDialogOpen = false;
    },
    openRegisterDialog: (state) => {
      state.registerDialogOpen = true; // Update this to manage register dialog
    },
    closeRegisterDialog: (state) => {
      state.registerDialogOpen = false; // Update this to manage register dialog
    },
  },
});

export const {
  openLoginDialog,
  closeLoginDialog,
  openRegisterDialog,
  closeRegisterDialog,
} = dialogSlice.actions;

export default dialogSlice.reducer;
