import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  white: JSON.parse(localStorage.getItem('white')) || [], // Safely parse the localStorage data
};

const whiteSlice = createSlice({
  name: 'white',
  initialState,
  reducers: {
    addtowhitelist: (state, action) => {
      const product = action.payload;
      const existingProduct = state.white.find((item) => item._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if the product exists
      } else {
        state.white.push({ ...product, quantity: 1 }); // Add new product with quantity 1
      }
      localStorage.setItem('white', JSON.stringify(state.white)); // Save updated state to localStorage
    },

    removeFromWhite: (state, action) => {
      state.white = state.white.filter((item) => item._id !== action.payload._id); // Remove item
      localStorage.setItem('white', JSON.stringify(state.white)); // Update localStorage
    },

    clearwhite: (state) => {
      state.white = []; // Clear all items
      localStorage.removeItem('white'); // Remove from localStorage
    },
  },
});

export const { addtowhitelist, removeFromWhite, clearwhite } = whiteSlice.actions;

export const selectWhite = (state) => state.white.white;

export default whiteSlice.reducer;
