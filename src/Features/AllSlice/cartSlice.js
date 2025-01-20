import { createSlice } from "@reduxjs/toolkit";
import { SuccessToast, ErrorToast, InfoToast } from "../../helpers/Toastify";

const initialState = {
  value: localStorage.getItem("CartItems")
    ? JSON.parse(localStorage.getItem("CartItems"))
    : [],
  cartTotalItem: 0,
  cartTotalAmount: 0,
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
    increment: (state, action) => {
      const filterItem = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (filterItem >= 0) {
        state.value[filterItem].cartQuantity += 1;
      }
      localStorage.setItem("CartItems", JSON.stringify(state.value));
      InfoToast(`${action.payload.name} is added to cart again`);
    },
    decrement: (state, action) => {
      const removeQuantityIndex = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (state.value[removeQuantityIndex].cartQuantity > 1) {
        state.value[removeQuantityIndex].cartQuantity -= 1;
      }
      ErrorToast(`${action.payload.name} a item removed from cart`);
      localStorage.setItem("CartItems", JSON.stringify(state.value));
    },
    getTotal: (state) => {
      const cartAllitemReduce = state.value.reduce(
        (cartinfo, cartitem) => {
          const { cartQuantity, price } = cartitem;
          cartinfo.totalAmount += cartQuantity * price;
          cartinfo.totalItem += cartQuantity;
          return cartinfo;
        },
        {
          totalAmount: 0,
          totalItem: 0,
        },
      );
      state.cartTotalAmount = cartAllitemReduce.totalAmount;
      state.cartTotalItem = cartAllitemReduce.totalItem;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, removeCart, increment, decrement, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
