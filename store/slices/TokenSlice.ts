import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
   name: "auth",
   initialState: { token: null },
   reducers: {
       setToken: (state, action) => {
           state.token = action.payload;
       },
   },
});

export const { setToken } = authSlice.actions;

const store = configureStore({
   reducer: { auth: authSlice.reducer },
});

export default store;

// Use with the Provider in _app.tsx