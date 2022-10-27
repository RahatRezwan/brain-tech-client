import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogsCard from "../BlogsCard/BlogsCard";

const Blogs = () => {
   const blogs = useLoaderData();
   return (
      <div className="my-10 mx-16">
         <h1 className="text-center text-primary text-3xl font-bold mb-5">All Blogs</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gird-cols-4 gap-5 ">
            {blogs.map((blog) => (
               <BlogsCard key={blog.id} blog={blog} />
            ))}
         </div>
      </div>
   );
};

export default Blogs;
