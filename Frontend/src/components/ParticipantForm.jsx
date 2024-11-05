import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ParticipantForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    designation: '',
    email: '',
    mobile: '',
    organization: '',
    address: '',
    city: '',
    pincode: '',
    gender: '',
    caste: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3001/create', formData)
      .then(() => {
        Swal.fire('Success!', 'Participant added successfully!', 'success');
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          designation: '',
          email: '',
          mobile: '',
          organization: '',
          address: '',
          city: '',
          pincode: '',
          gender: '',
          caste: '',
        });
      })
      .catch((err) => Swal.fire('Error!', err.message, 'error'));
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Participant</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Middle Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Middle Name</label>
          <input
            type="text"
            name="middleName"
            placeholder="Enter middle name"
            value={formData.middleName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Designation */}
        <div className="mb-4">
          <label className="block text-gray-700">Designation</label>
          <input
            type="text"
            name="designation"
            placeholder="Enter designation"
            value={formData.designation}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-gray-700">Mobile</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Organization */}
        <div className="mb-4">
          <label className="block text-gray-700">Organization</label>
          <input
            type="text"
            name="organization"
            placeholder="Enter organization name"
            value={formData.organization}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* City */}
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Pincode */}
        <div className="mb-4">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="text"
            name="pincode"
            placeholder="Enter pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Caste */}
        <div className="mb-4">
          <label className="block text-gray-700">Caste</label>
          <input
            type="text"
            name="caste"
            placeholder="Enter caste"
            value={formData.caste}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ParticipantForm;
