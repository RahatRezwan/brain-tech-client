import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
   const blog = useLoaderData();
   console.log(blog);
   return (
      <div>
         <h1>Blog</h1>
      </div>
   );
};

export default Blog;
