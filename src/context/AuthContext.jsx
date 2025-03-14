// import { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = localStorage.getItem("token");
//       console.log("Token in checkAuth:", token); // Debugging token

//       if (token) {
//         try {
//           const response = await axios.get("http://localhost:5000/user/me", {
//             headers: {
//               Authorization: `Bearer ${token.trim()}`, // Trim any spaces
//             },
//           });
//           setUser(response.data);
//         } catch (error) {
//           console.error("Session validation failed:", error);
//           setUser(null);
//           localStorage.removeItem("token"); // Logout user properly
//         }
//       }
//       setLoading(false);
//     };

//     checkAuth();
//   }, []);

//   const login = (userData) => {
//     console.log("Login called with:", userData);
//     setUser(userData.user);
//     localStorage.setItem("token", userData.token);
//   };

//   const logout = () => {
//     console.log("Logout called");
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/user/me", {
            headers: { Authorization: `Bearer ${token.trim()}` },
          });
          setUser(response.data);
        } catch (error) {
          console.error("Session validation failed:", error);
          setUser(null);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (userData) => {
    setUser(userData.user);
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

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
