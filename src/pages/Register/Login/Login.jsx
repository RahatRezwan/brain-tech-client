import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
   /* state for show and hide password */
   const [showPass, setShowPass] = useState(false);
   const [error, setError] = useState(null);
   const { loginAUser } = useContext(AuthContext);

   const handleSubmit = (event) => {
      setError(null);
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      /* User login */
      loginAUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
         })
         .catch((error) => setError(error.code.slice(5)));
   };
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col w-11/12 md:w-3/5 lg:max-w-lg">
            <div className="card w-full shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="text-center">
                     <h1 className="text-3xl font-bold">LOGIN</h1>
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  {(error?.includes("email") || error?.includes("user")) && (
                     <p className="text-red-500 font-bold">{error}</p>
                  )}
                  <div className="form-control relative">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                     <div
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-5 bottom-[16%] cursor-pointer"
                     >
                        {showPass ? (
                           <FaEyeSlash className="h-5 w-5" />
                        ) : (
                           <FaEye className="h-5 w-5" />
                        )}
                     </div>
                  </div>
                  {error?.includes("email") || error?.includes("user") || (
                     <p className="text-red-500 font-bold">{error}</p>
                  )}

                  <div className="form-control mt-2">
                     <button className="btn btn-outline hover:btn-primary">Login</button>
                  </div>

                  <p className="text-center my-2">
                     New to this website?{" "}
                     <Link to="/signup" className="link link-hover text-end text-base text-primary">
                        Register
                     </Link>
                  </p>
                  <Link className="link link-hover text-center text-base text-error">
                     Forgot password?
                  </Link>

                  <div className="divider">OR</div>
                  <div className="text-center">
                     <h4>Login With</h4>
                  </div>
                  <div className="form-control mt-2 flex flex-row gap-3 w-full justify-evenly">
                     <button className="btn btn-outline hover:btn-primary w-[45%] flex justify-center items-center gap-3">
                        <FaGoogle className="w-5 h-5" /> <span>Google</span>
                     </button>
                     <button className="btn btn-outline hover:btn-primary w-[45%] flex justify-center items-center gap-3">
                        <FaGithub className="w-5 h-5" /> <span>Github</span>
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
