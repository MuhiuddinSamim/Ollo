import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext=createContext(null);

const AuthProviders = ({children}) => {
    const [loading,setLoading]=useState(true);
     const [user,setUser]=useState('')

     const auth = getAuth(app);
     const googleProvider = new GoogleAuthProvider();

     const googleLogIn=( )=>{
        return signInWithPopup(auth,googleProvider)
     }

     const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
     }

     const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

     }
     const newProfileUpdate=(name,photo)=>{
        return updateProfile(auth.currentUser, {
  displayName: name, photoURL: photo
})
     }

     const logOut=()=>{
       return signOut(auth)
    }

     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
            console.log('auth state change',currentUser);
            setUser(currentUser);
            setLoading(false);
     });
     return ()=>{
        unSubscribe();
     }
    },[])

const authInfo={
    loading,
    user,
    createUser,
    logIn,
    logOut,
    newProfileUpdate,
    googleLogIn

}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;