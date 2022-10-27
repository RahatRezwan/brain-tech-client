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
         <footer className="footer p-10 bg-base-200 text-base-content mx-auto">
            <div>
               <Link to="/">
                  <img
                     src={dark ? logoDark : logoLight}
                     alt="logo"
                     className="w-[50px] md:w-[160px]"
                  />
               </Link>
            </div>
            <div>
               <span className="footer-title">Services</span>
               <Link className="link link-hover">Branding</Link>
               <Link className="link link-hover">Design</Link>
               <Link className="link link-hover">Marketing</Link>
               <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
               <span className="footer-title">Company</span>
               <Link className="link link-hover">About us</Link>
               <Link className="link link-hover">Contact</Link>
               <Link className="link link-hover">Jobs</Link>
               <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
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
