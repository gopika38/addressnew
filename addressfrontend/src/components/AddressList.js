import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddresses } from '../actions';

const AddressList = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center mb-4">Address Book</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="row align-items-center" style={{marginLeft:"10px"}}>
        {addresses.map((address) => (
          <div key={address._id} className="col-md-4 mb-3">
            <div className="card h-100 bg-light">
              <div className="card-body">
                <h5 className="card-title text-primary">{address.name}</h5>
                <p className="card-text"><strong>Street:</strong> {address.street}</p>
                <p className="card-text"><strong>City:</strong> {address.city}</p>
                <p className="card-text"><strong>Country:</strong> {address.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressList;
