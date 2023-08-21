import { createSlice } from "@reduxjs/toolkit";

const initialCart = { totalPrice: 0, items: [] };

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: initialCart,
  reducers: {
    addingItems(state, action) {
      const alreadyInIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[alreadyInIndex];
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    deletingItems(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addingItems, deletingItems } = CartSlice.actions;
export default CartSlice.reducer;
