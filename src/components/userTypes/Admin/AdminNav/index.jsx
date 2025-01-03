import React, { useState } from "react";
import { styled } from "@mui/system";

const AdminNavContainer = styled("div")(({ isCollapsed }) => ({
    width: isCollapsed ? "60px" : "250px",
    backgroundColor: "#FC8E40",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",
    transition: "width 0.3s ease",
    position: "fixed",
    height: "100vh",
    zIndex: 5,
}));


const AdminNav = () => {

    return ()
};

export default AdminNav;