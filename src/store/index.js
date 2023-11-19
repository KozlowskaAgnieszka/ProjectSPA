import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  days: { start: null, end: null, days: 0 },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    getDate(state, action) {
      state.days = action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(existingCartItemIndex, 1);
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
