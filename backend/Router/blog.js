import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  getBlogsByCategory,
  updateBlog,
} from "../Controller/blogController.js";
//import checkToken from "../middlewares/checkToken.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.get("/:id", getBlog);

blogRouter.get("/category/:category", getBlogsByCategory);

blogRouter.put("/:id", updateBlog);

blogRouter.post("/", createBlog);

//router.put("/:id", checkToken, updatedUser);

blogRouter.delete("/:id", deleteBlog);

//router.delete("/", checkToken, deleteAllUsers);

export default blogRouter;
