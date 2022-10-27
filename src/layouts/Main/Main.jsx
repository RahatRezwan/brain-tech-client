import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../pages";
import TopBar from "../../pages/Shared/TopBar/TopBar";

const Main = () => {
   return (
      <div>
         <TopBar />
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Main;
