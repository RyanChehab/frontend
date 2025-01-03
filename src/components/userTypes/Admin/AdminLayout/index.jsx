import React, { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";
import AdminNav from "../AdminNav";
import AdminBlocklist from "../AdminBlocklist";
import AdminDeletelist from "../AdminDelete";

const Admin = ()=>{
    const{password,setPassword,response,loading,handleBlockUser,activeMenuItem,setActiveMenuItem} = useContext(AdminContext)
    
    const renderComponent = () => {
        switch (activeMenuItem) {
            case "blockUser":
                return <AdminBlocklist />;
            case "deleteUser":
                return <AdminDeletelist/>;
            // case "addAdmin":
            //     return <div>Add Admin Component</div>;        
        }
    }

    return(
        <>
        <AdminNav onSelectItem={setActiveMenuItem} />
        <div>
            {renderComponent()}
        </div>
        </>
    )
}

export default Admin;