import { createSlice } from "@reduxjs/toolkit";

const accountStatus = { isUser: true, isLoggedIn: false, accounts: [] };

const AccountSlice = createSlice({
  name: "accountStatus",
  initialState: accountStatus,
  reducers: {
    register(state, action) {
      state.accounts = [...state.accounts, action.payload];
      state.isUser = true;
      state.isLoggedIn = true;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    isUserChange(state) {
      state.isUser = !state.isUser;
    },
    const selectFirstName = (state) => {
      const currentUser = state.accountStatus.accounts[0];
      return currentUser ? currentUser.firstName : "";
    };
  },
});

export const { register, login, logout, isUserChange } = AccountSlice.actions;
export default AccountSlice.reducer;
