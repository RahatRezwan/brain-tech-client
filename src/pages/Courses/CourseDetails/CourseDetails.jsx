import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";
import SideBar from "../../Shared/SideBar/SideBar";
import Pdf from "react-to-pdf";
import {
   FaStar,
   FaStarHalf,
   FaUsers,
   FaUser,
   FaCrown,
   FaCheckCircle,
   FaFileDownload,
} from "react-icons/fa";

const ref = React.createRef();
const CourseDetails = () => {
   const { dark } = useContext(ThemeContext);

   /* load course data and destructure it */
   const course = useLoaderData();
   const {
      id,
      name,
      video,
      img,
      tagline,
      description,
      price,
      Requirements,
      what_you_learn,
      Rating,
      Author,
   } = course;

   return (
      <div>
         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 px-2 xl:px-16 ">
            {/* main part */}
            <div
               className={`${
                  dark ? "border-gray-700 bg-base-200" : "border-gray-100 bg-base-100"
               } lg:col-span-7 my-10 border shadow-md rounded-lg p-5`}
            >
               {/* Heading Part */}
               <div className="flex justify-between items-center gap-5">
                  <h1 className={`text-primary text-3xl font-bold mb-3`}>{name}</h1>

                  {/* Download Button */}
                  <Pdf targetRef={ref} filename="Course-details.pdf">
                     {({ toPdf }) => (
                        <button
                           onClick={toPdf}
                           className="btn btn-primary btn-outline flex gap-2 text-sm font-bold rounded tooltip tooltip-primary tooltip-left"
                           data-tip="download description"
                        >
                           <FaFileDownload className="h-5" />
                        </button>
                     )}
                  </Pdf>
               </div>
               <div ref={ref}>
                  <div className="">
                     <img src={img} alt="" className="rounded-lg mb-4" />
                  </div>
                  <h4
                     className={`${
                        dark ? "text-slate-400" : "text-slate-600"
                     } text-lg font-bold mb-3`}
                  >
                     {tagline}
                  </h4>

                  {/* Author, Ragings, Enrollments */}
                  <div className="flex items-center justify-between w-[70%] mb-3">
                     <div className="flex items-center gap-1">
                        <FaUser />
                        <p>{Author.name}</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="flex items-center">
                           <FaStar className="text-warning" />
                           <FaStar className="text-warning" />
                           <FaStar className="text-warning" />
                           <FaStar className="text-warning" />
                           <FaStarHalf className="text-warning" />
                           <p className="text-warning">{Rating.stars}</p>
                        </div>
                        <p>({Rating.ratings})</p>
                     </div>
                     <div className="flex items-center gap-1">
                        <FaUsers /> <p>{Rating.students} students</p>
                     </div>
                  </div>

                  {/* Basic Requirements */}
                  <div className="mb-4">
                     <h4 className={`text-primary text-lg font-bold mb-3`}>What You Will Learn:</h4>
                     <div className="grid grid-cols-2 gap-3">
                        {what_you_learn.map((text) => (
                           <div className="flex items-center">
                              <FaCheckCircle className="text-primary w-[12%]" />
                              <p className="w-[88%] font-semibold text-sm">{text}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* description */}
                  <h4 className={`text-primary text-lg font-bold mb-1`}>Description</h4>
                  <p className="text-justify text-base">{description}</p>
               </div>
            </div>

            {/* Side Bar part */}
            <div className={`lg:col-span-5 relative rounded`}>
               <div
                  className={`${
                     dark ? "border-gray-700 bg-base-200" : "border-gray-100 bg-base-100"
                  } border shadow-md rounded my-10 p-5 lg:sticky top-[15%]`}
               >
                  <SideBar>
                     <video controls width="100%">
                        <source src={video} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                     </video>
                     <div className="flex justify-between items-center">
                        <h1
                           className={`${
                              dark ? "text-slate-400" : "text-slate-600"
                           } text-4xl font-extrabold my-4`}
                        >
                           ${price}
                        </h1>
                        <Link to={`/checkout/${id}`}>
                           <button className="btn btn-primary flex gap-2 text-md font-bold">
                              Buy Now
                           </button>
                        </Link>
                     </div>

                     <div>
                        <h4 className={`text-primary text-lg font-bold mb-3`}>
                           Basic Requirements:
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                           {Requirements.map((text) => (
                              <div className="flex items-center">
                                 <FaCheckCircle className="text-primary w-[12%]" />
                                 <p className="w-[88%] font-semibold text-sm">{text}</p>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="w-[100%]">
                        <Link to={`/checkout/${id}`}>
                           <button className="btn btn-outline btn-warning flex gap-2 text-md font-bold w-full mt-4">
                              <FaCrown className="h-5" /> Get Premium Access
                           </button>
                        </Link>
                     </div>
                  </SideBar>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseDetails;
