import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Others/Card/Card";
import Categories from "../../Others/Categories/Categories";
import SideBar from "../../Shared/SideBar/SideBar";

const Courses = () => {
   const allCourses = useLoaderData();
   return (
      <div className="">
         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 px-2 xl:px-16 ">
            <div className="lg:col-span-9 my-10">
               <h1 className="text-primary text-2xl font-bold mb-5">All Courses</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
                  {allCourses.map((course) => (
                     <Card key={course.id} course={course} />
                  ))}
               </div>
            </div>
            <div className="lg:col-span-3 my-10 relative">
               <div className="lg:sticky top-[15%]">
                  <SideBar>
                     <h1 className="text-2xl font-bold text-primary text-center mb-5">
                        Categories
                     </h1>
                     <Categories />
                  </SideBar>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Courses;
