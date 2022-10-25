import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./context/ThemeController/ThemeController";
import { router } from "./routes/Routes/Routes";

function App() {
   const { dark } = useContext(ThemeContext);
   return (
      <div data-theme={dark ? "night" : "lofi"}>
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
