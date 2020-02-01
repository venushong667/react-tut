import axios from "axios";

import CARAPI from "../constants/carapi";

export const CARAPI1 = (baseURL = "http://127.0.0.1:3006/api/") => {
  const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "App-Type": "dashboard"
    },
    withCredentials: true
  });

  const setAuthHeader = token => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const deleteAuthHeader = () =>
    delete axios.defaults.headers.common["Authorization"];

  const getCars = () => api.get(`/cars`);

  const getBrands = () => api.get(`/brands`);

  const userLogin = (email, password) =>
    api.post(`/login`, {
      email: email,
      password: password
    });

  return { getCars, getBrands, setAuthHeader, deleteAuthHeader, userLogin };
};
