import { configureStore } from "@reduxjs/toolkit";
import categoriesSlise from "./Categories/categoriesSlise";
import ProductsSlice from "./Products/ProductsSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
        products: ProductsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true
});