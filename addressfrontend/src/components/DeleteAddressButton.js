import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAddress } from '../actions';
import { toast } from 'react-toastify';

const DeleteAddressButton = () => {
  const [addressId, setAddressId] = useState('');
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!addressId) {
      alert('Please enter an address ID');
      return;
    }

    if (window.confirm('Are you sure you want to delete this address?')) {
      dispatch(deleteAddress(addressId));
      setAddressId(''); // Reset input after deletion
      toast.success("Address deleted")
    }
  };

  return (
    <div className='ms-5 align-items-center' style={{padding:"100px",paddingLeft:"550px"}}>
      <input
        type="text"
        value={addressId}
        onChange={(e) => setAddressId(e.target.value)}
        placeholder="Enter Address ID"
      /><br/>
      <button className="btn btn-danger mt-2" onClick={handleDelete} style={{paddingLeft:"20px"}}>
        Delete
      </button>
    </div>
  );
};

export default DeleteAddressButton;
