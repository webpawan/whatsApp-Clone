import { configureStore } from "@reduxjs/toolkit";
import toogleReducer from "./features/toggleSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        toogle:toogleReducer
    }
});

