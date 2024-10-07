import React from 'react';

const ProductsPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Products</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Product Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Price"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default ProductsPage;