import React from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

/* Create Context and Export */
export const AuthContext = createContext();

/* Crete auth */
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   /* Create a user */
   const createAUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* get currently logged in user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log(currentUser);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { user, createAUser };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
