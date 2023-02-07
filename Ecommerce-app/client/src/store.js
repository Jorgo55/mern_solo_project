import { configureStore } from "@reduxjs/toolkit";
import productsPicaSlices from "./features/productsPicaSlices";
import userPicaSlices from "./features/userPicaSlices";
import { Api } from "./services/Api";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducer = combineReducers({
  user: userPicaSlices,
  products: productsPicaSlices,
  [Api.reducerPath]: Api.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: [Api.reducerPath, "products"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, Api.middleware],
});

export default store;
