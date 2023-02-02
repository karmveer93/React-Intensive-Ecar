// store manages data and reduser

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer";

//use configureStore function to create the store


const store=configureStore({
    reducer:{
        cartItems:cartReducer
    }
})

export default store