// src/pages/ProductDetailsPage.jsx
import React, { useState } from 'react';

const ProductDetailsPage = () => {
  const [productDetails, setProductDetails] = useState({
    productName: '',
    productDescription: '',
    partNo: '',
    barcode: '',
    buyingPrice: '',
    wholesalePrice: '',
    retailPrice: '',
    productType: '',
    productCategory: '',
    productSubCategory: '',
    packageMode: '',
    storeName: '',
    shelf: '',
    shopQuantity: '',
    hasVat: false,
    isComponent: false,
    isHotlist: false,
    isDormant: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic to handle form submission, e.g., sending data to an API or saving locally
    console.log(productDetails);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Product Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={productDetails.productName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter product name"
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Description</label>
          <textarea
            name="productDescription"
            value={productDetails.productDescription}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter product description"
            rows="3"
          />
        </div>

        {/* Part Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Part Number</label>
          <input
            type="text"
            name="partNo"
            value={productDetails.partNo}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter part number"
          />
        </div>

        {/* Barcode */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Barcode</label>
          <input
            type="text"
            name="barcode"
            value={productDetails.barcode}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter barcode"
          />
        </div>

        {/* Buying Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Buying Price</label>
          <input
            type="number"
            name="buyingPrice"
            value={productDetails.buyingPrice}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter buying price"
          />
        </div>

        {/* Wholesale Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Wholesale Price</label>
          <input
            type="number"
            name="wholesalePrice"
            value={productDetails.wholesalePrice}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter wholesale price"
          />
        </div>

        {/* Retail Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Retail Price</label>
          <input
            type="number"
            name="retailPrice"
            value={productDetails.retailPrice}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter retail price"
          />
        </div>

        {/* Product Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Type</label>
          <input
            type="text"
            name="productType"
            value={productDetails.productType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter product type (e.g., electronics, clothing)"
          />
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Category</label>
          <input
            type="text"
            name="productCategory"
            value={productDetails.productCategory}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter product category"
          />
        </div>

        {/* Product Subcategory */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Subcategory</label>
          <input
            type="text"
            name="productSubCategory"
            value={productDetails.productSubCategory}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter product subcategory"
          />
        </div>

        {/* Package Mode */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Package Mode</label>
          <input
            type="text"
            name="packageMode"
            value={productDetails.packageMode}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter package mode (e.g., box, bag)"
          />
        </div>

        {/* Store Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Store Name</label>
          <input
            type="text"
            name="storeName"
            value={productDetails.storeName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter store name"
          />
        </div>

        {/* Shelf */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Shelf</label>
          <input
            type="text"
            name="shelf"
            value={productDetails.shelf}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter shelf location"
          />
        </div>

        {/* Shop Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Shop Quantity</label>
          <input
            type="number"
            name="shopQuantity"
            value={productDetails.shopQuantity}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter shop quantity"
          />
        </div>

        {/* VAT Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="hasVat"
            checked={productDetails.hasVat}
            onChange={handleChange}
            className="h-4 w-4 text-purple-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">Apply VAT</label>
        </div>

        {/* Component Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isComponent"
            checked={productDetails.isComponent}
            onChange={handleChange}
            className="h-4 w-4 text-purple-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">Component</label>
        </div>

        {/* Hotlist Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isHotlist"
            checked={productDetails.isHotlist}
            onChange={handleChange}
            className="h-4 w-4 text-purple-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">Hotlist</label>
        </div>

        {/* Dormant Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isDormant"
            checked={productDetails.isDormant}
            onChange={handleChange}
            className="h-4 w-4 text-purple-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">Dormant</label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductDetailsPage;
