import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  getBlogsByCategory,
} from "../Controller/blogController.js";
//import checkToken from "../middlewares/checkToken.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.get("/:category", getBlogsByCategory);

blogRouter.get("/:id", getBlog);

blogRouter.post("/", createBlog);

//router.put("/:id", checkToken, updatedUser);

blogRouter.delete("/:id", deleteBlog);

//router.delete("/", checkToken, deleteAllUsers);

export default blogRouter;
