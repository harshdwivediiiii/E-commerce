import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a cart item
interface CartItem {
  id: string; // or number if your IDs are numbers
  name: string; // adjust based on your product data
  price: number;
  count: number;
}

// Define the initial state type
interface CartState {
  cart: CartItem[];
}

// Initial state
const initialState: CartState = {
  cart: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "count">>) => {
      const { id } = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },

    increment: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.count += 1;
      }
    },

    decrement: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Export actions and reducer
export const { addToCart, increment, decrement, removeFromCart, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
