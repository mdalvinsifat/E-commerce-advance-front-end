import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.cart.filter(item => item._id !== action.payload._id);
      state.cart = updatedCart;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
