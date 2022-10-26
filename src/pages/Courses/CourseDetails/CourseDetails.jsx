import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";
import SideBar from "../../Shared/SideBar/SideBar";
import { FaStar, FaStarHalf, FaUsers } from "react-icons/fa";

const CourseDetails = () => {
   const { dark } = useContext(ThemeContext);
   const course = useLoaderData();
   const { name, video, img, tagline, description } = course;
   console.log(course);
   return (
      <div>
         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 px-2 xl:px-16 ">
            <div
               className={`${
                  dark ? "border-gray-700 bg-base-200" : "border-gray-100 bg-base-100"
               } lg:col-span-7 mt-10 border shadow-md rounded-lg p-5`}
            >
               <div className="">
                  <img src={img} alt="" className="rounded-lg mb-4" />
               </div>
               <h1 className={`text-primary text-4xl font-bold mb-2`}>{name}</h1>
               <h4
                  className={`${dark ? "text-slate-400" : "text-slate-600"} text-lg font-bold mb-5`}
               >
                  {tagline}
               </h4>
               <p className="text-justify text-base">{description}</p>
            </div>
            <div className={`lg:col-span-5 relative rounded`}>
               <div
                  className={`${
                     dark ? "border-gray-700 bg-base-200" : "border-gray-100 bg-base-100"
                  } border shadow-md rounded mt-10 p-5 lg:sticky top-[15%]`}
               >
                  <SideBar>
                     <video controls width="100%">
                        <source src={video} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                     </video>
                     <h1 className="text-2xl font-bold text-primary text-center mb-5">
                        Course Info
                     </h1>
                  </SideBar>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseDetails;
