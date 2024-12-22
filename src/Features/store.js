import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice.js";
import { productApi } from "../Features/Api/PtoductApi.js";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
