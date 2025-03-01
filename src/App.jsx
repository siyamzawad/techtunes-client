import Home from "./pages/home";
import Profile from "./pages/profile";
import AboutUs from "./pages/aboutUs";
import Login from "./pages/Login";
import Blog from "./pages/blog";
import CreatePost from "./pages/create";
import Admin from "./pages/admin";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import BlogsByCategory from "./components/BlogsByCategory";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="blogs/category/:category" element={<BlogsByCategory />} />
        <Route path="create" element={<CreatePost />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
