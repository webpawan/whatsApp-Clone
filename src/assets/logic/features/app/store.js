import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../groupSlice";
import toogleReducer from "../toggleSlice";
import userReducer from "../userSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        toogle:toogleReducer,
        group:groupReducer
    }
});

