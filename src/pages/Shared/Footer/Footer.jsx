import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeController/ThemeController";
import logoDark from "../../../logo-dark.svg";
import logoLight from "../../../logo-light.svg";

const Footer = () => {
   const { dark } = useContext(ThemeContext);
   return (
      <div>
         <footer className="grid gap-5 grid-cols-1 lg:grid-cols-3 p-10 bg-base-200 text-base-content mx-auto">
            <div className="flex flex-col justify-start items-center gap-5">
               <Link to="/">
                  <img
                     src={dark ? logoDark : logoLight}
                     alt="logo"
                     className="w-[100px] md:w-[160px]"
                  />
               </Link>
               <h1>www.braintech.com</h1>
               <h1>contact@braintech.com</h1>
            </div>
            <div className=" flex flex-col gap-3 justify-center items-center">
               <span className="footer-title">Links</span>
               <Link to="/" className="link link-hover">
                  Home
               </Link>
               <Link to="/courses" className="link link-hover">
                  Courses
               </Link>
               <Link to="/blogs" className="link link-hover">
                  Blogs
               </Link>
               <Link to="/faq" className="link link-hover">
                  FAQ
               </Link>
            </div>
            <div className="flex flex-col gap-3 justify-start items-center">
               <span className="footer-title">Legal</span>
               <Link className="link link-hover">Terms of use</Link>
               <Link className="link link-hover">Privacy policy</Link>
               <Link className="link link-hover">Cookie policy</Link>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
