import { configureStore } from "@reduxjs/toolkit";
import categoriesSlise from "./Categories/categoriesSlise";

export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
    },
    devTools: true
});