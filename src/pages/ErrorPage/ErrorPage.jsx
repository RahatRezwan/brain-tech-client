import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.png";

const ErrorPage = () => {
   const error = useRouteError();
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content text-center">
            <div className="">
               <img src={errorImg} alt="" className="w-[50%] mx-auto mb-4" />
               <h1 className="text-6xl font-extrabold mb-5">
                  {error.status} - {error.statusText || error.message}
               </h1>
               <Link to="/">
                  <button className="btn btn-primary rounded">Return Home</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ErrorPage;
