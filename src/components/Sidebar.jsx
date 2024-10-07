// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-800 text-white h-screen p-6">
      <ul className="space-y-4">
        {/* Dropdown for Stock */}
        <li>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full text-left hover:text-purple-500 focus:outline-none"
          >
            <span>Stock</span>
            <svg
              className={`w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="mt-2 space-y-2 pl-4">
              <li>
                <Link to="/company-details" className="hover:text-purple-500">Company Details</Link>
              </li>
              <li>
                <Link to="/additional-details" className="hover:text-purple-500">Additional Details</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-purple-500">Products</Link>
              </li>
              
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
