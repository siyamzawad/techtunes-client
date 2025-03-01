import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../Controller/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/", createCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
