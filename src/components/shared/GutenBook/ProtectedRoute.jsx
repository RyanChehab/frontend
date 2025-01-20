import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {

    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("type");

    if (!token || !role.includes(userType)) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;