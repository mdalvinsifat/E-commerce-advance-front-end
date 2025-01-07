import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
// import { selectWishlist } from "../../Redux/CountSlice";
import { useSelector } from "react-redux";
import { selectCart } from "../../Redux/CardSlice";
import { selectWhite } from "../../Redux/CountSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const wishlistItems = useSelector(selectWishlist);
  const CartLength = useSelector(selectCart)
  const whitelength = useSelector(selectWhite)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b shadow-md">
      {/* Top Section: Login / Register */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="container mx-auto flex justify-end items-center">
          <Link to="/login" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <FaRegUserCircle className="text-xl" />
            <span className="hidden md:block text-sm">Login / Register</span>
          </Link>
        </div>
      </div>

      {/* Main Section: Logo, Searchbar, Icons */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://bikribattashop.com/wp-content/uploads/2024/10/logo-1.webp"
            alt="Logo"
            className="h-12 md:h-14"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl text-gray-700">
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex w-1/2 lg:w-1/3 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Icons (Cart, Wishlist, Login) */}
        

      <div className="flex space-x-6 items-center">
          {/* Cart Icon */}
          <NavLink to="/cart">
          <div className="relative hidden md:block">
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
               {CartLength.length}
              </span>
            </button>
          </div>
          </NavLink>

          {/* Wishlist Icon */}
         <NavLink to="/wishlist">
         <div className="relative hidden md:block">
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
              {whitelength.length}
              </span>
            </button>
          </div>
         </NavLink>
        </div>
   
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 text-white p-4 space-y-4`}
      >
        <Link to="/login" className="block text-lg">
          Login / Register
        </Link>
        <Link to="/cart" className="block text-lg">
          Cart
        </Link>
        <Link to="/wishlist" className="block text-lg">
          Wishlist
        </Link>
      </div>
    </header>
  );
};

export default Header;