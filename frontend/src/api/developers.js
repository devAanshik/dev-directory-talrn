import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchDevelopers = () => {
  return axios.get(`${API_URL}/developers`);
};

export const addDeveloper = (data) => {
  return axios.post(`${API_URL}/developers`, data);
};
