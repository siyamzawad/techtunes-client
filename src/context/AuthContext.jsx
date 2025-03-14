import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/user/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log();
          setUser(response.data);
        } catch (error) {
          console.error("Session validation failed:", error);
          logout();
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = (userData) => {
    setUser(userData.user);
    console.log(userData);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
