import React, { useState } from "react";
import { useEffect } from "react";
import Category from "../Category/Category";

const Categories = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("https://brain-tech-server.vercel.app/categories")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);

   return (
      <div>
         {categories.map((category, index) => (
            <Category key={category.category_id} category={category} index={index} />
         ))}
      </div>
   );
};

export default Categories;
