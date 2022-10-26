import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";
import Category from "../Category/Category";

const Categories = () => {
   const { dark } = useContext(ThemeContext);
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/categories")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);
   return (
      <div>
         {categories.map((category, i) => (
            <div
               tabIndex={i}
               key={category.category_id}
               className={` ${
                  dark ? "border-gray-600" : "border-gray-200"
               } collapse collapse-arrow border bg-base-100 rounded`}
            >
               <div className="collapse-title text-xl font-medium">{category.category_name}</div>
               <div className="collapse-content">
                  <Category key={category.category_id} category_id={category.category_id} />
               </div>
            </div>
         ))}
      </div>
   );
};

export default Categories;
