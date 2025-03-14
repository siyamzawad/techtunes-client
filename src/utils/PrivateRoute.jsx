import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("PrivateRoute: User =", user); // Debugging log

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
