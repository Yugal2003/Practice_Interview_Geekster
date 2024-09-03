import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Store';

const Store = configureStore({
    reducer : {
        counterSlice,
    }
})

export default Store