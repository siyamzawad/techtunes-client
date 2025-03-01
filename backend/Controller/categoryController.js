// @desc    Get all categories
// @route   GET /api/categories

import Category from "../Model/category.js";

// @access  Public
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

// @desc    Create a new category
// @route   POST /api/categories
// @access  Public
export const createCategory = async (req, res) => {
  try {
    const { name, description, image } = req.body;

    const categoryExists = await Category.findOne({ name });
    if (categoryExists)
      return res.status(400).json({ error: "Category already exists" });

    const category = new Category({ name, description, image });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
  }
};

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Public
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    await category.deleteOne();
    res.json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};
