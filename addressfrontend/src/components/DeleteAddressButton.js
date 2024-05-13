import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAddress } from '../actions';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
                  {/* Navbar */}
                  <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/" className="btn btn-secondary ml-1">Back to Home</Link> {/* Styled "Back to Home" button */}

              </li>
            </ul>
          </div>
        </div>
      </nav>


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
