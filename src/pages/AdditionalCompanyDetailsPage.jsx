// src/pages/AdditionalCompanyDetailsPage.jsx
import React, { useState } from 'react';

const AdditionalCompanyDetailsPage = () => {
  const [details, setDetails] = useState({
    orgName: '',
    storeName: '',
    shelfName: '',
    productCategory: '',
    productSubCategory: '',
    vat: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Additional Company Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Organization Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Organization Name</label>
          <input
            type="text"
            name="orgName"
            value={details.orgName}
            onChange={handleChange}
            placeholder="Enter organization name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Store Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Store Name</label>
          <input
            type="text"
            name="storeName"
            value={details.storeName}
            onChange={handleChange}
            placeholder="Enter store name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Shelf Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Shelf Name</label>
          <input
            type="text"
            name="shelfName"
            value={details.shelfName}
            onChange={handleChange}
            placeholder="Enter shelf name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Category</label>
          <input
            type="text"
            name="productCategory"
            value={details.productCategory}
            onChange={handleChange}
            placeholder="Enter product category"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Product Subcategory */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Subcategory</label>
          <input
            type="text"
            name="productSubCategory"
            value={details.productSubCategory}
            onChange={handleChange}
            placeholder="Enter product subcategory"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* VAT */}
        <div>
          <label className="block text-sm font-medium text-gray-700">VAT %</label>
          <input
            type="text"
            name="vat"
            value={details.vat}
            onChange={handleChange}
            placeholder="Enter VAT percentage"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalCompanyDetailsPage;
