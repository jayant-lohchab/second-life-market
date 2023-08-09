import { configureStore } from "@reduxjs/toolkit";
import accountReducers from "./loginInfo"

const store = configureStore({
    reducer:{accountReducers:accountReducers}
})

export default store;
