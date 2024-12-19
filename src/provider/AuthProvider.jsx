import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({routes}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const handleRegister = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
      // .then(res=> signOut(auth))
    };
    const handleLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
    const handleGoogleLogin = () => {
      return signInWithPopup(auth, googleProvider);
    };
    const manageProfile = (name, image) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
    };
    const handleLogout = () => {
      signOut(auth);
    };

    const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile,
    user,
    setUser,
    loading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } 
      else {
        setUser(null);
      }
      setLoading(false);
      
      return () => {
        unsubscribe();
      };
    });
  }, []);

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{routes}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;