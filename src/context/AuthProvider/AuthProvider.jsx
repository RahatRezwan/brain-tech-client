import React from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from "firebase/auth";
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
   const [loading, setLoading] = useState(true);

   /* Create a user */
   const createAUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* Login A User */
   const loginAUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   /* Update user profile */
   const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
   };

   /* Log Out A user */
   const logOutUser = () => {
      setLoading(true);
      return signOut(auth);
   };

   /* get currently logged in user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
         console.log(currentUser);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { user, loading, createAUser, updateUserProfile, loginAUser, logOutUser };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
