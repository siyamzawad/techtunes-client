import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import BlogsByCategory from "./components/BlogsByCategory";
import BlogDetails from "./components/BlogDetails";
import UpdateBlog from "./components/UpdateBlog";
import Header from "./components/Header";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/home";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="blogs/category/:category" element={<BlogsByCategory />} />
        <Route
          path="create"
          element={
            <PrivateRoute>
              {" "}
              <CreateBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="edit-blog/:id"
          element={
            <PrivateRoute>
              <UpdateBlog />{" "}
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
