import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";

const Blog = () => {
   const blog = useLoaderData();
   const { img, question, answer } = blog;
   const { dark } = useContext(ThemeContext);
   return (
      <div className="w-[95%] md:w-[90%] lg:w-[50%] mx-auto">
         <div
            className={`${
               dark ? "border-gray-700 bg-base-200" : "border-gray-100 bg-base-100"
            } lg:col-span-7 my-10 border shadow-md rounded-lg p-5`}
         >
            <div className="">
               <img src={img} alt="" className="rounded-lg mb-4" />
            </div>
            {/* Question */}
            <div className="flex justify-between items-center gap-5">
               <h1 className={`text-primary text-3xl font-bold mb-3`}>{question}</h1>
            </div>
            {/* Answer */}
            <p className="text-justify text-base">{answer}</p>
         </div>
      </div>
   );
};

export default Blog;
