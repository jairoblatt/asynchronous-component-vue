import axios from "axios";

const HTTPClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  timeout: 2000,
  headers: {
    "Content-type": "application/json",
  },
});
// Resquest interceptor
HTTPClient.interceptors.request.use((config) => {
  return config;
}),
  (error) => {
    return Promise.reject(error);
  };

// Response interceptor
HTTPClient.interceptors.response.use((response) => {
  return response;
}),
  (error) => {
    return Promise.reject(error);
  };

export default HTTPClient;
