import { createSlice } from "@reduxjs/toolkit";
import { SuccessToast, ErrorToast, InfoToast } from "../../helpers/Toastify";

const initialState = {
  value: localStorage.getItem("CartItems")
    ? JSON.parse(localStorage.getItem("CartItems"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findItems = state.value.findIndex((item) => {
        return item._id == action.payload._id;
      });
      if (findItems >= 0) {
        state.value[findItems].cartQuantity += 1;
        localStorage.setItem("CartItems", JSON.stringify(state.value));
        InfoToast(`${action.payload.name} added to your cart again`);
      } else {
        state.value.push({
          ...action.payload,
          cartQuantity: 1,
        });
        localStorage.setItem("CartItems", JSON.stringify(state.value));
        SuccessToast(`${action.payload.name} is added to cart`);
      }
      console.log(findItems);
    },
    removeCart: (state, action) => {
      const updatedCart = state.value.filter((item) => {
        return item._id !== action.payload._id;
      });
      state.value = updatedCart;
      localStorage.setItem("CartItems", JSON.stringify(state.value));
      ErrorToast(`${action.payload.name} is removed from cart`);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
