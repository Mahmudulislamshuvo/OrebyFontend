import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../Features/Api/PtoductApi.js";
import { exclusiveApi } from "./Api/exclusiveApi.js";
import { cartSlice, getTotal } from "./AllSlice/cartSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, //if I don't use .reducer code will not going to work properly
    [productApi.reducerPath]: productApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(exclusiveApi.middleware),
});

store.dispatch(getTotal());
