import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./AccountSlice";
import CartSlice from "./CartSlice";
import SellSlice from "./SellSlice";

const Store = configureStore({
  reducer: {
    accountStatus: AccountSlice,
    cartStatus: CartSlice,
    sellStatus: SellSlice,
  },
});

export default Store;
