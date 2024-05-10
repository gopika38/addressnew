// AddAddressForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAddress  } from '../actions';
import { toast } from 'react-toastify';

const AddAddressForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    country: ''
  });

  const { name, street, city, country } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAddress (formData));
    setFormData({
      name: '',
      street: '',
      city: '',
      country: ''
    });
    toast.success('Address added successfully');
  };

  return (
    <div className="mb-4">
      <h2 className="text-center mb-3">Add New Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddAddressForm;
