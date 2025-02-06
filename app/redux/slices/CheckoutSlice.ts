import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Load initial state from localStorage
const loadInitialState = () => {
  const storedData = localStorage.getItem("selected-item");

  if (storedData) {
    try {
      return JSON.parse(storedData) as string[];
    } catch (error) {
      console.error("Error parsing checkout data from localStorage:", error);
      return [];
    }
  }
};
localStorage.clear();
const initialState: string[] = loadInitialState() || [];

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    selectItems: (state, action: PayloadAction<string>) => {
      const existingID = state.find((item) => action.payload === item);

      if (!existingID) {
        state.push(action.payload);
      }
    },

    deselectItems: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item !== action.payload);
    },

    selectAllItems: (state, action: PayloadAction<string[]>) => {
      const newItems = action.payload.filter((item) => !state.includes(item));
      state.push(...newItems);
    },

    deselectAllItems: (state) => {
      return [];
    },
  },
});

export const { selectItems, deselectItems, selectAllItems, deselectAllItems } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
