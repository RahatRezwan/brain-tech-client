import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";

const Category = ({ category_id }) => {
   const { dark } = useContext(ThemeContext);
   const [courses, setCourses] = useState([]);
   useEffect(() => {
      fetch(`http://localhost:5000/courses/${category_id}`)
         .then((res) => res.json())
         .then((data) => setCourses(data));
   }, [category_id]);
   return (
      <>
         {courses.map((course) => (
            <div
               className={`${
                  dark ? "border-gray-600" : "border-gray-200"
               } bg-base-100 shadow-md border p-1 flex items-center justify-start gap-2 w-full mb-2 rounded cursor-pointer hover:text-primary`}
            >
               <img src={course.img} alt="" className="w-[20%] rounded-sm" />
               <p className="text-sm font-bold w-[80%]">{course.name}</p>
            </div>
         ))}
      </>
   );
};

export default Category;
