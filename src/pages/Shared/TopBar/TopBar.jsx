import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Loading from "../../Others/Loading/Loading";

const TopBar = () => {
   const { user, loading } = useContext(AuthContext);

   if (loading) {
      return <Loading />;
   }

   return (
      <div
         className={`${
            user?.emailVerified || !user ? "hidden" : "block"
         } bg-warning text-white font-bold text-center p-2 text-md`}
      >
         Your email is not verified. Please check your inbox or spam folder and verify.
      </div>
   );
};

export default TopBar;
