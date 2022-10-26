import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Others/Card/Card";
import SideBar from "../../Shared/SideBar/SideBar";

const Courses = () => {
   const allCourses = useLoaderData();
   return (
      <div className="w-100">
         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-9 pt-10 md:px-3">
               <h1 className="text-primary text-2xl font-bold mb-5">All Courses</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
                  {allCourses.map((course) => (
                     <Card key={course.id} course={course} />
                  ))}
               </div>
            </div>
            <div className="lg:col-span-3 pt-10 text-center">
               <SideBar />
            </div>
         </div>
      </div>
   );
};

export default Courses;
