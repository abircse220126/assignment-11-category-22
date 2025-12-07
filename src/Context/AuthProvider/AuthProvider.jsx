import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';


const googleProvider= new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user , setUser]=useState()


    const createUser=(email , password)=>{
       return createUserWithEmailAndPassword(auth , email , password)
    }

    const googleLogIn=()=>{
       return signInWithPopup(auth , googleProvider)
    }



    // Create observer
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentuser)=>{
            setUser(currentuser)
            
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const authInfo={
        createUser,
        user,
        googleLogIn


    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;