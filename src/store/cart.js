import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsShown: false,
  items: [],
  totalAmount: 0,
  days: { start: null, end: null, days: 0, minDate: new Date() },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    showCart(state, action) {
      state.cartIsShown = action.payload;
    },
    getDate(state, action) {
      state.days = action.payload;
      console.log(state.days);
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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
