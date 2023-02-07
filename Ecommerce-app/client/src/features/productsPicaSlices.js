import { createSlice } from "@reduxjs/toolkit";

//
// import Api from "../services/Api";

const initialState = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (_, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addMatcher(
    //   Api.endpoints.createProduct.matchFulfilled,
    //   (_, { payload }) => payload
    // );
    // builder.addMatcher(
    //   Api.endpoints.updateProduct.matchFulfilled,
    //   (_, { payload }) => payload
    // );
    // builder.addMatcher(
    //   Api.endpoints.deleteProduct.matchFulfilled,
    //   (_, { payload }) => payload
    // );
  },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
