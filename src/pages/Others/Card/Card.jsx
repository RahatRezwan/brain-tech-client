import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";

const Card = ({ course }) => {
   const { id, name, tagline, img } = course;
   const { dark } = useContext(ThemeContext);
   return (
      <div
         className={`${
            dark ? "bg-base-300 border-gray-600" : "bg-base-100 border-gray-200"
         } shadow-lg rounded-md border `}
      >
         <div className="p-3 pb-0">
            <img src={img} alt="" className=" rounded-md" />
         </div>
         <div className="p-3 flex flex-col gap-3">
            <h1 className="text-2xl text-primary font-bold">{name}</h1>
            <p className="text-base text-gray-500">{tagline.slice(0, 100) + "..."}</p>
            <Link to={`/course/${id}`}>
               <button className="bg-transparent text-primary border border-primary py-2 px-4 hover:transition hover:delay-100 hover:bg-primary hover:text-base-100 rounded text-md font-bold">
                  See Details
               </button>
            </Link>
         </div>
      </div>
   );
};

export default Card;
