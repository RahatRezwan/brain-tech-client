import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./context/ThemeController/ThemeController";
import { router } from "./routes/Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CloseButton = ({ closeToast }) => (
   <button onClick={closeToast} className="btn btn-outline btn-primary">
      Ok
   </button>
);

function App() {
   const { dark } = useContext(ThemeContext);
   return (
      <div data-theme={dark ? "night" : "corporate"}>
         <RouterProvider router={router} />
         <ToastContainer
            position="top-center"
            autoClose={15000}
            theme={dark ? "light" : "dark"}
            closeButton={CloseButton}
         />
      </div>
   );
}

export default App;
