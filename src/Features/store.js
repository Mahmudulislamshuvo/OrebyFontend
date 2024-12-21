import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice.js";

export const store = configureStore({
  reducer: {
    count: counterSlice,
  },
});
