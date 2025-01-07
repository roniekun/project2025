import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deviceType: "smartphone", // default to desktop
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDeviceType: (state, action) => {
      state.deviceType = action.payload;
    },
    // toggleDeviceType: (state) => {
    //   if (state.deviceType === 'desktop') {
    //     state.deviceType = 'tablet';
    //   } else if (state.deviceType === 'tablet') {
    //     state.deviceType = 'smartphone';
    //   } else {
    //     state.deviceType = 'desktop';
    //   }
    // },
  },
});

export const { setDeviceType } = deviceSlice.actions;

export default deviceSlice.reducer;
