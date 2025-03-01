import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-heading font-bold text-center text-gray-900 mb-6">
        Explore Tech Blog Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
