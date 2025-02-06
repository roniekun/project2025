import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setToggleMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { toggleMenu, setToggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
