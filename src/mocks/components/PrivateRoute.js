import React from "react";
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest}) => {
        if(localStorage.getItem('token')) {
            return (<Component {...rest} />);
        } else {
            return <Navigate to='/login' />
        }
    }

export default PrivateRoute;