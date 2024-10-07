import React from 'react';

const AdditionalCompanyDetailsPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Additional Company Details</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Org Name</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Org name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Store Name</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Store Name"
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

export default AdditionalCompanyDetailsPage;