import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if (loading){
        return <Spinner></Spinner>
    }
    
    if( user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoute;