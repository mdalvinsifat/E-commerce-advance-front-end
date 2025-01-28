import React from "react";
import {  Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import CategoryProduct from "./Pages/CategoryProduct/CategoryProduct";
import Cart from "./Pages/Cart/Cart";
import WishlistPage from "./Pages/WhiteList/WishlistPage";
import HomeDetelis from "./Pages/HomeDetelis/HomeDetelis";
import CreateProduct from "./AdminPanel/CreateProduct/CreateProduct";
import SearchResultsPage from "./component/SearchResultsPage/SearchResultsPage";
import Login from "./Pages/LoginAndRegister/Login";
import Register from "./Pages/LoginAndRegister/Register";
import CreateCategory from "./AdminPanel/CreateCategory/CreateCategory";
import SeeProduct from "./AdminPanel/SeeProduct/SeeProduct";
import Updateproduct from "./AdminPanel/UpdateProduct/Updateproduct";
import SeeCategory from "./AdminPanel/SeeCategory/SeeCategory";


const App = () => {
    return (
       
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<CategoryProduct/>} />
                <Route path="/wishlist" element={<WishlistPage/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<HomeDetelis />} />
                <Route path="admin/create-product" element={<CreateProduct/>} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="/admin/create-category" element={<CreateCategory />} />
                <Route path="/admin/see-products" element={<SeeProduct />} />
                <Route path= "/admin/create-product-update/:id" element={<Updateproduct/>} />
                <Route path= "/admin/see-categories" element={<SeeCategory/>} />
            </Routes>
            <Login/>
            <Register/>
            
        </div>
        
    );
};

export default App;
