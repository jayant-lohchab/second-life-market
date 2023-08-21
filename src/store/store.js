import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./AccountSlice";
import CartSlice from "./CartSlice";

const Store = configureStore({
  reducer: {
    accountStatus: AccountSlice,
    cartStatus: CartSlice,
  },
});

export default Store;
