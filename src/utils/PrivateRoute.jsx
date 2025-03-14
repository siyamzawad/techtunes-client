import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../context/useAuth";
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("PrivateRoute: User =", user);

  return user ? children : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
