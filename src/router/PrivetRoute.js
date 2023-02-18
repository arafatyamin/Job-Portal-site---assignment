import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <svg class="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24">
        </svg>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/signIn' state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;