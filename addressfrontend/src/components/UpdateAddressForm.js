import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAddress } from '../actions';
import { toast } from 'react-toastify';

const UpdateAddressForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      toast.warning('Please enter Address ID');
      return;
    }
    const updatedAddress = {
      name: name || undefined,
      street: street || undefined,
      city: city || undefined,
      country: country || undefined,
    };
    dispatch(updateAddress(id, updatedAddress));
    setId('');
    setName('');
    setStreet('');
    setCity('');
    setCountry('');
    toast.success('Address Updated Successfully');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Update Address Here...</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">Address ID:</label>
              <input
                type="text"
                id="id"
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter Address ID"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="street" className="form-label">Street:</label>
              <input
                type="text"
                id="street"
                className="form-control"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Enter Street"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City:</label>
              <input
                type="text"
                id="city"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country:</label>
              <input
                type="text"
                id="country"
                className="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter Country"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-sm">Update Address</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAddressForm;
