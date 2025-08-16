import axios from "axios";
import { getAccessToken } from "../lib/tokenStore";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || "https://localhost:7004/api/",
});

api.interceptors.request.use(config => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;