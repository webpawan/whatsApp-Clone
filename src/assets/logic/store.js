import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./features/groupSlice";
import toogleReducer from "./features/toggleSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        toogle:toogleReducer,
        group:groupReducer
    }
});

