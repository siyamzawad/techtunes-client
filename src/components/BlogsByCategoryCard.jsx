import { useNavigate } from "react-router-dom";

const BlogsByCategoryCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 transition hover:shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {blog.title}
        </h2>
        <p className="text-gray-600 line-clamp-3">
          {blog.body.slice(0, 100)}...
        </p>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>By {blog.author}</span>
          <span>❤️ {blog.likes}</span>
        </div>
        <button
          onClick={() => navigate(`/blogs/${blog._id}`)}
          className="mt-4 text-orange-500 hover:underline"
        >
          Read More →
        </button>
      </div>
    </>
  );
};

export default BlogsByCategoryCard;
