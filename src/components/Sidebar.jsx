// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-6">
      <ul className="space-y-4">
        <li>
          <Link to="/company-details" className="hover:text-purple-500">Company Details</Link>
        </li>
        <li>
          <Link to="/additional-details" className="hover:text-purple-500">Additional Details</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-purple-500">Products</Link>
        </li>
        <li>
          <Link to="/sell-product" className="hover:text-purple-500">Sell Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
