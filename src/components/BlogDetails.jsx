import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blog details.");
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      navigate(-1); // Navigate back after delete
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
      <p className="text-gray-500 mt-2">
        By {blog.author} | ❤️ {blog.likes} Likes
      </p>
      <p className="mt-4 text-gray-700">{blog.body}</p>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => navigate(`/edit-blog/${id}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
