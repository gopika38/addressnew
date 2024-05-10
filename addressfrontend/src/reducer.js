// reducer.js

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ADDRESSES_REQUEST':
    case 'CREATE_ADDRESS_REQUEST':
    case 'UPDATE_ADDRESS_REQUEST':
    case 'DELETE_ADDRESS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_ADDRESSES_SUCCESS':
      return {
        ...state,
        addresses: action.payload,
        loading: false,
      };
    case 'CREATE_ADDRESS_SUCCESS':
    case 'UPDATE_ADDRESS_SUCCESS':
    case 'DELETE_ADDRESS_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'FETCH_ADDRESSES_FAILURE':
    case 'CREATE_ADDRESS_FAILURE':
    case 'UPDATE_ADDRESS_FAILURE':
    case 'DELETE_ADDRESS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
