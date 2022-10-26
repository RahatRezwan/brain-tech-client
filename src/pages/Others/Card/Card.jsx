import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";

const Card = ({ course }) => {
   const { name, tagline, img } = course;
   const { dark } = useContext(ThemeContext);
   return (
      <div className={`${dark ? "bg-base-300" : "bg-base-100"} shadow-lg rounded-md`}>
         <div className="p-3 pb-0">
            <img src={img} alt="" className=" rounded-md" />
         </div>
         <div className="p-3 flex flex-col gap-3">
            <h1 className="text-2xl text-primary font-bold">{name}</h1>
            <p className="text-base text-gray-500">{tagline.slice(0, 100) + "..."}</p>
            <button className="bg-transparent text-primary border border-primary py-2 hover:transition hover:delay-100 hover:bg-primary hover:text-base-100 rounded text-md font-bold">
               See Details
            </button>
         </div>
      </div>
   );
};

export default Card;
