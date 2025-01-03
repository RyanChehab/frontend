import React, { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";
import AdminNav from "../AdminNav";
const Admin = ()=>{
    const{password,setPassword,response,loading,handleBlockUser} = useContext(AdminContext)
    
    return(
        <AdminNav/>
    )
}

export default Admin;