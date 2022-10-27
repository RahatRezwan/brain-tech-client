import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Hero = () => {
   const { user } = useContext(AuthContext);
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
               <div className="max-w-lg">
                  <h1 className="text-5xl font-bold mb-2">
                     Hello, {user?.displayName.toUpperCase()}
                  </h1>
                  <h1 className="text-5xl font-bold mb-2">Welcome to</h1>
                  <h1 className="text-5xl font-bold mb-2">Brain Tech</h1>
                  <p className="py-6">
                     We will provide some high quality courses. Please check out our courses. We
                     have courses in more than 4 different categories. Check out all.
                  </p>
                  <Link to="/courses">
                     <button className="btn btn-primary">Get Started</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
