import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) { return <span className="loading loading-infinity loading-xl"></span> }
    if (user) { return children; }
    else { return <Navigate to={"/login"}></Navigate> }

};

export default PrivateRoutes;