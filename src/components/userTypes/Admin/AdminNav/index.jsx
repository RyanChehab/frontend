import React, { useState } from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

const CollapseToggle = styled(IconButton)(({ isCollapsed }) => ({
    position: "absolute",
    top: "10px",
    right: isCollapsed ? "-20px" : "-40px",
    backgroundColor: "#fff",
    color: "#FC8E40",
    zIndex: 6,
    "&:hover": {
        backgroundColor: "#f5f5f5",
    },
}));

const AdminAvatar = styled(Avatar)({
    width: "60px",
    height: "60px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    color: "#FC8E40",
    fontSize: "24px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const AdminName = styled("div")(({ isCollapsed }) => ({
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    display: isCollapsed ? "none" : "block",
}));

const MenuItem = styled("div")(({ isCollapsed }) => ({
    width: "100%",
    padding: "15px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
    display: isCollapsed ? "none" : "block",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#FC8E40",
    },
}));

const AdminNav = () => {
    
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleNav = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <AdminNavContainer isCollapsed={isCollapsed}>
            <CollapseToggle onClick={toggleNav}>
                {isCollapsed ? <MenuIcon /> : <CloseIcon />}
            </CollapseToggle>
            <AdminAvatar>A</AdminAvatar>
            <AdminName isCollapsed={isCollapsed}>Hello, Admin</AdminName>
            <MenuItem isCollapsed={isCollapsed}>Block User</MenuItem>
            <MenuItem isCollapsed={isCollapsed}>Delete User</MenuItem>
            <MenuItem isCollapsed={isCollapsed}>Add Admin</MenuItem>
        </AdminNavContainer>
    )
};

export default AdminNav;