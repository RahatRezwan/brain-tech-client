import React from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   sendEmailVerification,
   signInWithEmailAndPassword,
   signInWithPopup,
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

/* Google Auth Provider */
const googleProvider = new GoogleAuthProvider();

/* Github Auth Provider */
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   /* Create a user */
   const createAUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* Send Email Verification */
   const verifyUserEmail = () => {
      setLoading(true);
      return sendEmailVerification(auth.currentUser);
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

   /* Login Using Google */
   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   /* Login using github */
   const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };

   /* get currently logged in user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = {
      user,
      loading,
      createAUser,
      verifyUserEmail,
      updateUserProfile,
      loginAUser,
      googleLogin,
      githubLogin,
      logOutUser,
   };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
