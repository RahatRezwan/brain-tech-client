import React from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";

/* Create Context and Export */
export const AuthContext = createContext();

/* Crete auth */
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState("Rahat");

   const authInfo = { user };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
