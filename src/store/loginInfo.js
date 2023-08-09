import { createSlice } from "@reduxjs/toolkit";

const accountStatus = {isUser:false,isLoggedIn:false,accounts:[]};

const loginInfoSlice = createSlice({
    name:"accountStatus",
    initialState:accountStatus,
    reducers:{
        register(state,action){
            state.accounts = [...state.accounts,action.payload];
            state.isUser = true;
            state.isLoggedIn = true;
        },
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        },
        isUserChange(state){
            state.isUser = !state.isUser;
        }
    }
});

export const accountActions = loginInfoSlice.actions;
export default loginInfoSlice.reducer;
