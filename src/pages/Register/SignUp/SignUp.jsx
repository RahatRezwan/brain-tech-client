import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const SignUp = () => {
   /* state for show and hide password */
   const [showPass, setShowPass] = useState(false);
   const [error, setError] = useState(null);
   const { createAUser, updateUserProfile, logOutUser } = useContext(AuthContext);

   /* navigate to a route */
   const navigate = useNavigate();

   /* Handle form submit */
   const handleSubmit = (event) => {
      event.preventDefault();
      setError(null);
      const form = event.target;
      const fullName = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      console.log(fullName, photoURL, email, password, confirm);

      if (password !== confirm) {
         setError("Your Password Didn't Match");
         return;
      }
      if (password.length < 8) {
         setError("Password should have at least 8 characters");
         return;
      }

      /* Create A User */
      createAUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateUser(fullName, photoURL);
            logOutUser();
            navigate("/login");
         })
         .catch((error) => {
            setError(error.code.slice(5));
         });
   };

   /* Update User Profile */
   const handleUpdateUser = (name, photoURL) => {
      const profile = { displayName: name, photoURL: photoURL };
      updateUserProfile(profile)
         .then(() => {})
         .catch((e) => console.log(e));
   };

   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col w-11/12 md:w-3/5 lg:max-w-lg">
            <div className="card w-full shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="text-center">
                     <h1 className="text-3xl font-bold">SIGN UP</h1>
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Full Name</span>
                     </label>
                     <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        className="input input-bordered focus:border-none focus:outline-primary"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Photo URL</span>
                     </label>
                     <input
                        type="text"
                        name="photoURL"
                        placeholder="Your Photo URL"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
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
                        required
                     />
                  </div>
                  <div className="form-control relative">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input input-bordered focus:border-none focus:outline-primary"
                        required
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
                  <div className="form-control relative">
                     <label className="label">
                        <span className="label-text">Confirm Password</span>
                     </label>
                     <input
                        type={showPass ? "text" : "password"}
                        name="confirm"
                        placeholder="Confirm password"
                        className="input input-bordered focus:border-none focus:outline-primary"
                        required
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
                  <strong className="text-red-500 text-center">{error}</strong>
                  <div className="form-control mt-5">
                     <button className="btn btn-outline hover:btn-primary">Sign Up</button>
                  </div>

                  <p className="text-center my-2">
                     Already have an account?{" "}
                     <Link to="/login" className="link link-hover text-end text-base text-primary">
                        Login
                     </Link>
                  </p>

                  <div className="divider">OR</div>
                  <div className="text-center">
                     <h4>Sign Up With</h4>
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

export default SignUp;
