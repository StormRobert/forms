import React from 'react';

const CompanyDetailsPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Company Details</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Company Name</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Company Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Email"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default CompanyDetailsPage;