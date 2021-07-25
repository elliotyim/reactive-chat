import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URI,
  timeout: 30000,
});

instance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const http = instance;
