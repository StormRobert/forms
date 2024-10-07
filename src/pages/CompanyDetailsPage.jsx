// src/pages/CompanyDetailsPage.jsx
import React, { useState } from 'react';

const CompanyDetailsPage = () => {
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    email: '',
    phone: '',
    location: '',
    addressLine1: '',
    addressLine2: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails({
      ...companyDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(companyDetails);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Company Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={companyDetails.companyName}
            onChange={handleChange}
            placeholder="Enter Company Name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={companyDetails.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={companyDetails.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={companyDetails.location}
            onChange={handleChange}
            placeholder="Enter Location"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Address Line 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={companyDetails.addressLine1}
            onChange={handleChange}
            placeholder="Enter Address Line 1"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Address Line 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={companyDetails.addressLine2}
            onChange={handleChange}
            placeholder="Enter Address Line 2"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={companyDetails.zipCode}
            onChange={handleChange}
            placeholder="Enter Zip Code"
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

export default CompanyDetailsPage;
