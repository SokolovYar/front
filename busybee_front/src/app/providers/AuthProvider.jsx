import React, { createContext, useContext, useState, useEffect } from "react";
import { login as apiLogin, signup as apiSignup, getMe } from "../../entities/user/api/authApi";
import { getAccessToken, setAccessToken, clearAccessToken } from "../../shared/lib/tokenStore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password, rememberMe) => {
    const res = await apiLogin(email, password, rememberMe);
    //const { accessToken, user } = res.data;
    const accessToken = res.data.data;
    setAccessToken(accessToken);
    setUser(user);
  };

  const signup = async (userData) => {
    const res = await apiSignup(userData);
    const { accessToken, user } = res.data;
    setAccessToken(accessToken);
    setUser(user);
  };

  const logout = () => {
    clearAccessToken();
    setUser(null);
  };

  // При первом рендере проверяем токен
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      getMe()
        .then(res => setUser(res.data))
        .catch(() => clearAccessToken())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
