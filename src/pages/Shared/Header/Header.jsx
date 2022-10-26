import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoLight from "../../../logo-light.svg";
import logoDark from "../../../logo-dark.svg";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import userPic from "../../../assets/userPic.png";

const Header = () => {
   const { dark, setDarkTheme } = useContext(ThemeContext);
   const { user, logOutUser } = useContext(AuthContext);

   /* handle Logout */
   const handleLogOut = () => {
      logOutUser()
         .then(() => {})
         .catch((error) => console.log(error));
   };

   return (
      <div className="sticky top-0 w-[100%] z-20 bg-base-200 shadow-lg">
         <div className="  mx-auto flex justify-between items-center container py-3 px-20">
            <div>
               <Link to="/">
                  <img src={dark ? logoDark : logoLight} alt="logo" className="w-[160px]" />
               </Link>
            </div>
            <div>
               <ul className="flex justify-center items-center gap-10">
                  <NavLink
                     className="hover:text-primary hover:border-b-2 hover:border-b-primary font-semibold text-base"
                     to="/"
                  >
                     Home
                  </NavLink>
                  <NavLink
                     className="hover:text-primary hover:border-b-2 hover:border-b-primary font-semibold text-base"
                     to="/courses"
                  >
                     Courses
                  </NavLink>
                  <NavLink
                     className="hover:text-primary hover:border-b-2 hover:border-b-primary font-semibold text-base"
                     to="/blogs"
                  >
                     Blogs
                  </NavLink>
                  <NavLink
                     className="hover:text-primary hover:border-b-2 hover:border-b-primary font-semibold text-base"
                     to="/faq"
                  >
                     FAQ
                  </NavLink>
               </ul>
            </div>
            <div className="flex gap-4 items-center">
               {/* Dark Mode/Light mode toggler */}
               <div>
                  <label className="swap swap-rotate">
                     <input type="checkbox" onClick={() => setDarkTheme(!dark)} />
                     <svg
                        className="swap-on fill-current w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                     >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                     </svg>
                     <svg
                        className="swap-off fill-current w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                     >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                     </svg>
                  </label>
               </div>
               {user?.uid ? (
                  <>
                     <div
                        className="avatar tooltip tooltip-bottom cursor-pointer"
                        data-tip={user?.displayName ? user.displayName : "A user"}
                     >
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                           <img src={user?.photoURL ? user.photoURL : userPic} alt="profile" />
                        </div>
                     </div>
                     <button
                        onClick={handleLogOut}
                        className="btn btn-outline btn-primary text-[13px] font-bold rounded-md"
                     >
                        Logout
                     </button>
                  </>
               ) : (
                  <>
                     <Link to="/login">
                        <button className="btn btn-outline btn-primary text-[13px] font-bold rounded-md">
                           Login
                        </button>
                     </Link>
                     <Link to="/signup">
                        <button className="btn btn-primary hover:btn-outline text-[13px] font-bold rounded-md">
                           Register
                        </button>
                     </Link>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
