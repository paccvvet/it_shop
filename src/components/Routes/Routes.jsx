import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Usless from "../usless/usless";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";
import SingleCategories from "../Categories/SingleCategories";
import Cart from "../Cart/Cart";


const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.CATEGORY} element={<SingleCategories />}/>
            <Route path={ROUTES.CART} element={<Cart />}/>
        </Routes>
    )
};

export default AppRoutes