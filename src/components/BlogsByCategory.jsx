import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogsByCategoryCard from "./BlogsByCategoryCard";

const BlogsByCategory = () => {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${category}`)
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p className="text-center">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Blogs in {category}
      </h1>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-600">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogsByCategoryCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsByCategory;
