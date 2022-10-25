import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../pages";

const Main = () => {
   return (
      <div>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Main;
