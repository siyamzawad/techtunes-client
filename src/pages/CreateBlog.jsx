import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !category) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/blogs", {
        title,
        body: content,
        category,
        author: "bob", // Replace with user?.username when authentication is added
      });

      toast.success("Post Created Successfully");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Error creating post:", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            Write A Blog
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2  focus:outline-none"
                placeholder="Enter your post title..."
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Select Category:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              >
                <option value="">-- Choose a category --</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Content */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Write Your Blog:
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="6"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Share your thoughts..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F07623] hover:bg-orange-600 text-white text-xl font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center"
            >
              {loading ? (
                <span className="animate-spin h-5 w-5 border-t-2 border-white border-solid rounded-full"></span>
              ) : (
                "Post"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;

// import { useState } from 'react';
// import React from 'react';
// import Header from '../components/header';
// //import axiosInstance from '../utils/axiosInstance';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from "react-hot-toast";

// function CreatePost() {
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [content, setContent] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !content || !category) {
//       alert("All fields are required!");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await axios.post("http://localhost:4000/posts", {
//         title,
//         body: content,
//         category,
//         author: "NRK"//user?.username, // Assign the logged-in user as the author
//       });
//       const {data} = response;
//       toast.success("Post Created Successfully");

//       setTimeout(()=>{
//         navigate("/");
//       },1000);

//     } catch (err) {
//       console.error("Error creating post:", err);
//     }finally{
//       setLoading(false)
//     }

//     console.log("Post Submitted:", { title, category, content });
//   };

//   const textAreaStyle = {
//     width: "90%",
//     padding: "0.5rem",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     marginBottom: "1rem",
//     resize: "none",
//     fontSize: "1rem",
//     display: "block"
//   };

//   return (
//     <>
//       <Header />
//       <div style={{ textAlign: "center", padding: "20px" }}>
//         <h2>Create a New Post</h2>
//         <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto", textAlign: "left" }}>

//           <label style={{ display: "block", marginBottom: "10px" }}>
//             Title:
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               style={textAreaStyle}
//               placeholder="Enter your post title..."
//             />
//           </label>

//           <label style={{ display: "block", marginBottom: "10px" }}>
//             Select Category:
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               style={textAreaStyle}>
//               <option value="">-- Choose a category --</option>
//               <option value="Technology">Technology</option>
//               <option value="Health">Health</option>
//               <option value="Emergency">Emergency</option>
//               <option value="Education">Education</option>
//             </select>
//           </label>

//           <label style={{ display: "block", marginBottom: "10px" }}>
//             Write Your Blog:
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               rows="6"
//               style={textAreaStyle}
//               placeholder="Share your thoughts..."
//             />
//           </label>

//           <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
//             {loading ? "Posting" : "Post"}
//             </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default CreatePost;
