import { createSlice } from "@reduxjs/toolkit";

// appApi
import Api from "../services/Api";

const initialState = null;

export const userSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    logout: () => initialState,
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
    resetNotifications: (state) => {
      state.notifications.forEach((obj) => {
        obj.status = "read";
      });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      Api.endpoints.signup.matchFulfilled,
      (_, { payload }) => payload
    );
    builder.addMatcher(
      Api.endpoints.login.matchFulfilled,
      (_, { payload }) => payload
    );
    // builder.addMatcher(
    //   Api.endpoints.addToCart.matchFulfilled,
    //   (_, { payload }) => payload
    // );
    // builder.addMatcher(
    //   Api.endpoints.removeFromCart.matchFulfilled,
    //   (_, { payload }) => payload
    // );
    // builder.addMatcher(
    //   Api.endpoints.increaseCartProduct.matchFulfilled,
    //   (_, { payload }) => payload
    // );
    // builder.addMatcher(
    //   Api.endpoints.decreaseCartProduct.matchFulfilled,
    //   (_, { payload }) => payload
    // );
    // builder.addMatcher(
    //   Api.endpoints.createOrder.matchFulfilled,
    //   (_, { payload }) => payload
    // );
  },
});
export const { logout, addNotification, resetNotifications } =
  userSlice.actions;
export default userSlice.reducer;
