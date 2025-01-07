import React from "react";
import {  Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import CategoryProduct from "./Pages/CategoryProduct/CategoryProduct";
import Cart from "./Pages/Cart/Cart";
import WishlistPage from "./Pages/WhiteList/WishlistPage";


const App = () => {
    return (
       
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<CategoryProduct/>} />
                <Route path="/wishlist" element={<WishlistPage/>} />
                <Route path="/cart" element={<Cart />} />

            </Routes>
        
    );
};

export default App;
