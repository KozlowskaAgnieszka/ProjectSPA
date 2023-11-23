import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsShown: false,
  items: { rooms: [], treatments: [] },
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
    },
    addItem(state, action) {
      const cartItemExist = (type) => {
        const existingCartItemIndex = type.findIndex(
          (item) => item.id === action.payload.id
        );
        return type[existingCartItemIndex];
      };

      if (action.payload.type === 'room') {
        const rooms = state.items.rooms;
        const existingRoom = cartItemExist(rooms);

        if (existingRoom) {
          existingRoom.message =
            'You can only select the same room once to add to your cart';
        } else {
          rooms.push(action.payload);
        }
      }

      if (action.payload.type === 'treatment') {
        const treatments = state.items.treatments;
        const existingTreatment = cartItemExist(treatments);

        if (existingTreatment) {
          existingTreatment.amount++;
        } else {
          treatments.push(action.payload);
        }
      }
    },
    deleteItem(state, action) {
      const cartItemExist = (type, id) => {
        return type.findIndex((item) => item.id === id);
      };

      const [id, type] = action.payload;
      if (type === 'room') {
        const rooms = state.items.rooms;
        const existingRoom = cartItemExist(rooms, id);

        state.items.rooms.splice(existingRoom, 1);
      }

      if (type === 'treatment') {
        const treatments = state.items.treatments;
        const existingTreatment = cartItemExist(treatments, id);

        const treatment = treatments[existingTreatment];

        if (treatment.amount > 1) {
          treatment.amount--;
        } else {
          state.items.treatments.splice(existingTreatment, 1);
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
