import { createSlice } from "@reduxjs/toolkit";

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
      } else {
        state.value.push({
          ...action.payload,
          cartQuantity: 1,
        });
        localStorage.setItem("CartItems", JSON.stringify(state.value));
      }
      console.log(findItems);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
