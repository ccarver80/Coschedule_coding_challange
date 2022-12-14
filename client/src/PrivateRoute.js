import React from "react";
import {Navigate, Outlet } from "react-router-dom";


const PrivateRoute = (props) => {
    return props.auth ? <Outlet/> : <Navigate to='/signin' />; 
}

export default PrivateRoute; 