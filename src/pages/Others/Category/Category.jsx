import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";
import CategoryItems from "../CategoryItems/CategoryItems";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
const Category = ({ category, index }) => {
   const { dark } = useContext(ThemeContext);
   const { category_id, category_name } = category;
   const [show, setShow] = useState(false);

   const [courses, setCourses] = useState([]);
   useEffect(() => {
      fetch(`https://brain-tech-server.vercel.app/courses/${category_id}`)
         .then((res) => res.json())
         .then((data) => setCourses(data));
   }, [category_id]);

   const handleSetShow = (id) => {
      if (id === category_id) {
         setShow(!show);
      }
   };

   return (
      <div
         onClick={() => handleSetShow(category_id)}
         tabIndex={index}
         className={`${
            dark ? "border-gray-600" : "border-gray-200"
         } collapse border bg-base-100 rounded w-full text-start`}
      >
         <div className="collapse-title text-xl font-medium flex justify-between items-center px-5 ">
            {category_name} {show ? <FaAngleUp /> : <FaAngleDown />}
         </div>

         <div className={`${show ? "block" : "hidden"} mx-2 transition ease-in-out delay-75`}>
            {courses.map((course) => (
               <CategoryItems key={course.id} course={course} />
            ))}
         </div>
      </div>
   );
};

export default Category;
