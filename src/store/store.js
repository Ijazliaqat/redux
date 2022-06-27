import { configureStore } from "@reduxjs/toolkit";
import mangoSlice from "./mangoSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        mango: mangoSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;