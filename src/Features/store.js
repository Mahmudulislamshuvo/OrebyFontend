import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice.js";
import { productApi } from "../Features/Api/PtoductApi.js";

export const store = configureStore({
  reducer: {
    count: counterSlice,
  },
});
