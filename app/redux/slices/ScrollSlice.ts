import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    scrollPosition: 0,
    // isScrolled: false,
  },
  reducers: {
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
    // isScrolled: (state) => {
    //   state.isScrolled = !state.isScrolled;
    // },
  },
});

export const { setScrollPosition } = scrollSlice.actions; //isScrolled
export default scrollSlice.reducer;
