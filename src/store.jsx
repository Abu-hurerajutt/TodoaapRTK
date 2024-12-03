import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./features/task slice/Task-slice";

export const store = configureStore({
    reducer:{
        tasks:TaskSlice
    }
})