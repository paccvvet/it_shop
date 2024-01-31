import { configureStore } from "@reduxjs/toolkit";
import categoriesSlise from "./Categories/categoriesSlise";
import ProductsSlice from "./Products/ProductsSlice";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
        products: ProductsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userSlice,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true
});