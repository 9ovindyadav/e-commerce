import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/userReducers";

const store = configureStore({
    reducer:{
     user: userReducer
    }
})

export default store ;

export const server = import.meta.env.VITE_BACKEND_URL; 