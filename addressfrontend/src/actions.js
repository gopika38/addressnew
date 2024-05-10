import AddressBookAPI from './apis/AddressBookAPI';

export const fetchAddresses = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_ADDRESSES_REQUEST' });
    AddressBookAPI.getAllAddresses()
      .then((response) => {
        dispatch({ type: 'FETCH_ADDRESSES_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ADDRESSES_FAILURE', payload: error.message });
      });
  };
};

export const createAddress = (addressData) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_ADDRESS_REQUEST' });
    AddressBookAPI.createAddress(addressData)
      .then(() => {
        dispatch({ type: 'CREATE_ADDRESS_SUCCESS' });
        dispatch(fetchAddresses()); // Refresh the addresses list after creating a new address
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_ADDRESS_FAILURE', payload: error.message });
      });
  };
};

export const deleteAddress = (id) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_ADDRESS_REQUEST' });
    AddressBookAPI.deleteAddressById(id) // Use deleteAddressById from AddressBookAPI
      .then(() => {
        dispatch({ type: 'DELETE_ADDRESS_SUCCESS' });
        dispatch(fetchAddresses()); // Refresh the addresses list after deleting an address
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_ADDRESS_FAILURE', payload: error.message });
      });
  };
};

export const updateAddress = (id, addressData) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_ADDRESS_REQUEST' });
    AddressBookAPI.updateAddressById(id, addressData) // Use updateAddressById from AddressBookAPI
      .then(() => {
        dispatch({ type: 'UPDATE_ADDRESS_SUCCESS' });
        dispatch(fetchAddresses()); // Refresh the addresses list after updating an address
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_ADDRESS_FAILURE', payload: error.message });
      });
  };
};
