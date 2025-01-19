import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
