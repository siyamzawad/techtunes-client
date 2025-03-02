import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  console.log(category);
  const handleClick = () => {
    navigate(`/blogs/category/${category._id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
        <p className="text-gray-600">{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
