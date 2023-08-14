import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./AccountSlice";

const Store = configureStore({
  reducer: {
    accountStatus: AccountSlice,
  },
});

export default Store;
