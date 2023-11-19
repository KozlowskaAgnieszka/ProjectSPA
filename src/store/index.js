import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  days: 1,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
