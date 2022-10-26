import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";

const CategoryItems = ({ course }) => {
   const { dark } = useContext(ThemeContext);
   const { name, id, img } = course;

   const navigate = useNavigate();
   const handleNavigate = (id) => {
      navigate(`/course/${id}`);
   };

   return (
      <div>
         <div
            className={`${
               dark ? "border-gray-600" : "border-gray-200"
            } bg-base-100 shadow-md border p-1 flex items-center justify-start gap-2 w-full mb-2 rounded cursor-pointer hover:text-primary`}
         >
            <img src={img} alt="" className="w-[20%] rounded-sm" />
            <button
               onClick={() => handleNavigate(id)}
               className="text-sm text-start font-semibold w-[80%]"
            >
               {name}
            </button>
         </div>
      </div>
   );
};

export default CategoryItems;
