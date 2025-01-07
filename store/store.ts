import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/MenuSlice";
import deviceReducer from "./slices/DeviceSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    device: deviceReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
