import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authService } from "../../Services/Authentication";

const PrivateRoute = () => {
    return authService.isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
