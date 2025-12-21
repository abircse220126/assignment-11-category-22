
import React, { Children, use, } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const {user , loading }=use(AuthContext)
    
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    if(user){
       return children 
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;