import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  const navLinks = [
    { path: "/create", name: "Add" },
    { path: "/aboutus", name: "About" },
    { path: "/login", name: "Login" },
    { path: "/register", name: "Register" },
  ];

  return (
    <div className="bg-gray-800 px-12">
      <header className=" text-white p-4 flex justify-between items-center">
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
        <nav className="space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="px-6 py-2 border-2 border-transparent rounded-full text-white hover:bg-[#F2761E] hover:text-white transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Header;
