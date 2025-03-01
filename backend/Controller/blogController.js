import Blog from "../Model/Blog.js";

export const createBlog = async (req, res) => {
  try {
    const { title, body, author, category } = req.body;
    if (!title || !body || !author || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newBlog = new Blog({ title, body, author, category });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getBlogsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await Blog.find({ category: category });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch category posts" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
