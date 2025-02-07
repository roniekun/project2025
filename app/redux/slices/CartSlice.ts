import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { countError } from "../lib/countError";

export interface CartItemProps {
  id: string;
  product: string;
  maxQuantity: number;
  quantity: number;
  price: number;
  basePrice: number;
  error?: boolean;
  errMessage?: string;
}

function getStoredCartItem(): CartItemProps[] {
  const cartItem = localStorage.getItem("cartItem");

  if (cartItem) {
    try {
      return JSON.parse(cartItem) as CartItemProps[];
    } catch (error) {
      console.error("Error parsing cartItem from localStorage:", error);
    }
  }
  return [];
}

const initialState: CartItemProps[] = getStoredCartItem();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItemProps>) => {
      state.push(action.payload); // Add a new product to the cart
      localStorage.setItem("cartItem", JSON.stringify(state));
    },

    deleteProducts: (state, action: PayloadAction<(string | undefined)[]>) => {
      if (action.payload) {
        const newState = state.filter(
          (item) => !action.payload.includes(item.id)
        );
        localStorage.setItem("cartItem", JSON.stringify(newState));
        return newState;
      }
    },

    addCount: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.price = item.basePrice * item.quantity;
        const error = countError(item.quantity, item.maxQuantity);
        item.error = error?.isError;
        item.errMessage = error?.errMessage;
      }
      localStorage.setItem("cartItem", JSON.stringify(state));
    },

    addCustomCount: (
      state,
      action: PayloadAction<{ id: string; count: number }>
    ) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (!item) return;

      item.quantity = action.payload.count;
      item.price = action.payload.count * item.basePrice;
      const error = countError(action.payload.count, item.maxQuantity);
      item.error = error?.isError;
      item.errMessage = error?.errMessage;
      localStorage.setItem("cartItem", JSON.stringify(state));
    },

    reduceCount: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (!item || item.quantity <= 0) return;

      item.quantity = item.quantity - 1;
      item.price = item.basePrice * item.quantity;
      const error = countError(item.quantity, item.maxQuantity);
      item.error = error?.isError;
      item.errMessage = error?.errMessage;
      localStorage.setItem("cartItem", JSON.stringify(state));
    },
  },
});

export const {
  addProduct,
  deleteProducts,
  addCount,
  reduceCount,
  addCustomCount,
} = cartSlice.actions;
export default cartSlice.reducer;
