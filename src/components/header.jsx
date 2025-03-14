import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import useAuth from "../context/useAuth";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-gray-800 px-12">
      <header className="text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="TechTunes"
            width={80}
            height={80}
            className="rounded-lg shadow-md"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {/* Always visible links */}
          {user && (
            <Link
              to="/create"
              className="px-6 py-2 border-2 border-transparent rounded-full text-white hover:bg-[#F2761E] hover:text-white transition-all duration-300"
            >
              Add
            </Link>
          )}
          <Link
            to="/aboutus"
            className="px-6 py-2 border-2 border-transparent rounded-full text-white hover:bg-[#F2761E] hover:text-white transition-all duration-300"
          >
            About
          </Link>

          {/* Conditional rendering based on auth status */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-orange-400">Welcome, {user.username}</span>
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-full bg-[#F2761E] text-white hover:bg-orange-600 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-6">
              <Link
                to="/login"
                className="px-6 py-2 border-2 border-transparent rounded-full text-white hover:bg-[#F2761E] hover:text-white transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 border-2 border-transparent rounded-full text-white hover:bg-[#F2761E] hover:text-white transition-all duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
