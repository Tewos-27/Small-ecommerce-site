import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
// This file sets up the Redux store for the application
// It imports the cart reducer and configures the store with it
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;