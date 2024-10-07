import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBarChart2, FiChevronDown, FiPackage, FiSettings, FiHelpCircle, FiMenu, FiChevronLeft } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={`bg-gray-900 text-gray-300 h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out`}>
      <div className="flex flex-col h-full">
        {/* Toggle button */}
        <button 
          onClick={toggleSidebar}
          className="p-4 text-gray-300 hover:bg-gray-800 transition-colors duration-200 self-end"
        >
          {isOpen ? <FiChevronLeft size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo */}
        <div className={`mb-8 flex items-center justify-center ${isOpen ? 'px-6' : 'px-2'}`}>
          <svg className="w-10 h-10 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          {isOpen && <span className="ml-2 text-xl font-bold text-white">YourLogo</span>}
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow px-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200">
                <FiHome className="w-5 h-5" />
                {isOpen && <span className="ml-3">Dashboard</span>}
              </Link>
            </li>
            
            {/* Stock Dropdown */}
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
              >
                <div className="flex items-center">
                  <FiBarChart2 className="w-5 h-5" />
                  {isOpen && <span className="ml-3">Stock</span>}
                </div>
                {isOpen && (
                  <FiChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                )}
              </button>
              
              {isOpen && isDropdownOpen && (
                <ul className="mt-2 space-y-2 pl-12">
                  <li>
                    <Link to="/company-details" className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200">Company Details</Link>
                  </li>
                  <li>
                    <Link to="/additional-details" className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200">Additional Details</Link>
                  </li>
                  <li>
                    <Link to="/products" className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200">Products</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/inventory" className="flex items-center py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200">
                <FiPackage className="w-5 h-5" />
                {isOpen && <span className="ml-3">Inventory</span>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto px-4 pb-6">
          <ul className="space-y-4">
            <li>
              <Link to="/settings" className="flex items-center py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200">
                <FiSettings className="w-5 h-5" />
                {isOpen && <span className="ml-3">Settings</span>}
              </Link>
            </li>
            <li>
              <Link to="/help" className="flex items-center py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200">
                <FiHelpCircle className="w-5 h-5" />
                {isOpen && <span className="ml-3">Help</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;