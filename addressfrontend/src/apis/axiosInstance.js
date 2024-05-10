import axios from "axios";

//const subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;

// Create axios instance with dynamic headers
const instance = axios.create({
  headers: {
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
});

//const getTokenFromLocalStorage = () => {
  //return localStorage.getItem("token");
//};

// Add a request interceptor to set the Authorization header with the Bearer token
instance.interceptors.request.use(
  (config) => {
    const token ="qwertyy";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add headers, authentication token, etc.)
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // You can modify the response data here (e.g., transform data, handle success globally)
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default instance;