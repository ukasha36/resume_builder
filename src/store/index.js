import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import langSlice from "./slices/langSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
