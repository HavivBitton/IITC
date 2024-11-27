import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      //   {
      //     id: 1234,
      //     name: "Coca-Cola bottle",
      //     price: 8.9,
      //     quantity: 3,
      //     totalItemPrice: 26.7,
      //   },
      //   {
      //     id: 5678,
      //     name: "Mana-Hama",
      //     price: 7,
      //     quantity: 3,
      //     totalItemPrice: 21,
      //   },
    ],
    totalQuantityInCart: 0,
    totalPriceInCart: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the product is already in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalItemPrice += action.payload.totalItemPrice;
      }
      // Update the Cart Quantity and price.
      state.totalQuantityInCart += action.payload.quantity;
      state.totalPriceInCart += action.payload.totalItemPrice;
    },
    removeItem: (state, action) => {
      //1/.Find item index
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      //2.Filter Index
      const item = state.items[itemIndex];
      state.totalQuantityInCart -= item.quantity;
      state.totalPriceInCart -= item.price * item.quantity;
      state.items.splice(item, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
