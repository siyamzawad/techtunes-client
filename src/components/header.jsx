import React from "react";
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
    <header className="bg-gray-800 text-white p-2 flex justify-around items-center">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="TechTunes" width={80} height={80} />
      </Link>

      {/* Navigation Links */}
      <nav className="space-x-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;

// import React from "react"; // ✅ Import React
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./home.css";
// import logo from "../assets/logo.jpg";

// function Header() {
//   const [addPath, setAddPath] = useState("/create");
//   const [btn1Name, setBtn1Name] = useState("About");
//   const [btn2Name, setBtn2Name] = useState("Login");

//   return (
//     <div className="header">
//       <div>
//         <Link to="/">
//           <img src={logo} alt="techtunes" width={80} height={80} />
//         </Link>
//       </div>
//       <div className="headerbtn">
//         <Link to={addPath}>
//           <button>Add</button>
//         </Link>
//         <Link to="/aboutus">
//           <button>{btn1Name}</button>
//         </Link>
//         <Link to="/login">
//           <button>{btn2Name}</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Header;
