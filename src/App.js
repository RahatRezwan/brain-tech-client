import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/AuthProvider/AuthProvider";
import { ThemeContext } from "./context/ThemeController/ThemeController";
import { router } from "./routes/Routes/Routes";

function App() {
   const { dark } = useContext(ThemeContext);
   const { loading } = useContext(AuthContext);
   if (loading) {
      return (
         <div className="w-[100%] mt-52 ms-52">
            <progress className="progress w-[70%] h-5 mx-auto"></progress>
            <progress className="progress w-[70%] h-5 mx-auto"></progress>
         </div>
      );
   }
   return (
      <div data-theme={dark ? "night" : "corporate"}>
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
