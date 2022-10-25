import React, { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeController = ({ children }) => {
   const [dark, setDarkTheme] = useState(false);
   const themeInfo = { setDarkTheme, dark };

   return <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>;
};

export default ThemeController;
