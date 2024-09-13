import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cartReducers';
import orderCreateReducer from './redux/orderReducers';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orderCreate: orderCreateReducer,
  }
});

export default store;