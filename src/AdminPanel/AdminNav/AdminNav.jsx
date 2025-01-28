import React from 'react';
import { FaBox, FaTags, FaProductHunt, FaListAlt, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <div className="min-h-screen h-full bg-gradient-to-b from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Admin Panel</h2>

      <div className="space-y-6">
        {/* Create Product */}
        <Link to="/admin/create-product" className="flex items-center p-3 rounded-lg hover:bg-indigo-700 hover:shadow-md transition-all duration-200">
          <FaProductHunt className="text-2xl mr-4" />
          <span className="text-lg font-semibold">Create Product</span>
        </Link>

        {/* Create Category */}
        <Link to="/admin/create-category" className="flex items-center p-3 rounded-lg hover:bg-indigo-700 hover:shadow-md transition-all duration-200">
          <FaTags className="text-2xl mr-4" />
          <span className="text-lg font-semibold">Create Category</span>
        </Link>

        {/* See Product */}
        <Link to="/admin/see-products" className="flex items-center p-3 rounded-lg hover:bg-indigo-700 hover:shadow-md transition-all duration-200">
          <FaBox className="text-2xl mr-4" />
          <span className="text-lg font-semibold">See Products</span>
        </Link>

        {/* See Category */}
        <Link to="/admin/see-categories" className="flex items-center p-3 rounded-lg hover:bg-indigo-700 hover:shadow-md transition-all duration-200">
          <FaListAlt className="text-2xl mr-4" />
          <span className="text-lg font-semibold">See Categories</span>
        </Link>

        {/* See Order */}
        <Link to="/admin/see-orders" className="flex items-center p-3 rounded-lg hover:bg-indigo-700 hover:shadow-md transition-all duration-200">
          <FaClipboardList className="text-2xl mr-4" />
          <span className="text-lg font-semibold">See Orders</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
