import api from "../../../shared/api/axios";

export const login = (credentials) => api.post("/auth/login", credentials);
export const signup = (userData) => api.post("/auth/signup", userData);
export const getMe = () => api.get("/auth/me");
