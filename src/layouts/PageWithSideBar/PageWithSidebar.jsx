import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, SideBar } from "../../pages";

const PageWithSidebar = () => {
   return (
      <div>
         <Header />
         <div className="container grid grid-cols-12 gap-4">
            <div className="col-span-8">
               <Outlet />
            </div>
            <div className="col-span-4">
               <SideBar />
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default PageWithSidebar;