import axiosInstance from "./axiosInstance";


const API_BASE_URL = "http://localhost:5000";

const AddressBookAPI = {
  // Get all addresses
  getAllAddresses: () => {
    return axiosInstance.get(`${API_BASE_URL}/addresses`);
  },

  // Create a new address
  createAddress: (addressData) => {
    return axiosInstance.post(`${API_BASE_URL}/address`, addressData);
  },

  // Update an address by ID
  updateAddressById: (id, updatedAddressData) => {
    return axiosInstance.put(`${API_BASE_URL}/address/${id}`, updatedAddressData);
  },

  // Update an address by name
  updateAddressByName: (name, updatedAddressData) => {
    return axiosInstance.put(`${API_BASE_URL}/address/name/${name}`, updatedAddressData);
  },

  // Delete an address by ID
  deleteAddressById: (id) => {
    return axiosInstance.delete(`${API_BASE_URL}/address/${id}`);
  },

  // Delete an address by name
  deleteAddressByName: (name) => {
    return axiosInstance.delete(`${API_BASE_URL}/address/name/${name}`);
  },
};

export default AddressBookAPI;
