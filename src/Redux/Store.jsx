import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './UserSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
// import wishlistReducer from './CountSlice';
import cartReducer from './CardSlice';
import WhiteReducer from './CountSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // wishlist: wishlistReducer,
    cart: cartReducer,
    white : WhiteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
