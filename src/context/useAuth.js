import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Import from AuthContext file

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
