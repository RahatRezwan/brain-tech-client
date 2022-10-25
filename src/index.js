import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeController from "./context/ThemeController/ThemeController";
import AuthProvider from "./context/AuthProvider/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <ThemeController>
         <AuthProvider>
            <App />
         </AuthProvider>
      </ThemeController>
   </React.StrictMode>
);

reportWebVitals();
