import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
// This file sets up the Redux store for the application
// It imports the cart reducer and configures the store with it
const store = configureStore({
  // The configureStore function from Redux Toolkit is used to create the store
  reducer: {
    // The cart reducer is added to the store
    cart: cartReducer,
  },
});

export default store;