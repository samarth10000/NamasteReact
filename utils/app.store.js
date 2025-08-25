import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    //there can be more big reducers for every alternate Slice
    cart: cartReducer,
  },
});

export default appStore;
