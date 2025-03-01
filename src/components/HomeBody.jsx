// import React, { useState } from "react";
// import CategoryContents from "./categoryContents";
// import "./home.css";

// function homeBody() {
//   const [categories, setCategory] = useState([
//     {
//       title: "Education",
//       body: "Post anything related to your study",
//       id: "Education",
//     },
//     { title: "Emergency", body: "Post anything urgent", id: "Emergency" },
//     {
//       title: "Health",
//       body: "Post anything related to your study",
//       id: "Health",
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter categories based on search input
//   const filteredCategories = categories.filter((category) =>
//     category.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="home-content">
//       <div className="homeTitle">
//         Categories
//         <hr />
//       </div>
//       <div>
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search categories..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <CategoryContents categories={filteredCategories} />
//     </div>
//   );
// }

// export default homeBody;
import React from "react";

const HomeBody = () => {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Banner Content */}
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
          Explore. Learn. Innovate
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-body">
          Stay ahead with the latest tech trends, tutorials, and insights.
        </p>
        <button className="mt-6 px-6 py-3 font-body bg-[#F07623] hover:bg-{#F07510} text-white font-semibold rounded-lg shadow-lg transition">
          Read Latest Articles
        </button>
      </div>
    </div>
  );
};

export default HomeBody;
