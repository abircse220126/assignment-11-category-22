import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [user , setUser]=useState()


    const createUser=(email , password)=>{
       return createUserWithEmailAndPassword(auth , email , password)
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
        user


    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;