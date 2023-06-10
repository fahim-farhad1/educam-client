import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create  a  new user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign in User
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Signin With Google 
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // Log Out User
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
      }
    // Manage User
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user:-', currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        auth,
        createUser,
        signIn,
        logOut,
        user,
        signInWithGoogle,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;