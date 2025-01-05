import React, { useState } from "react";
import AdminNav from "../AdminNav";
import AdminBlocklist from "../AdminBlocklist";
import AdminDeletelist from "../AdminDelete";
import AddAdmin from "../AddAdmin";

const Admin = ()=>{
    const [activeMenuItem, setActiveMenuItem] = useState("blockUser");
    
    const renderComponent = () => {
        switch (activeMenuItem) {
            case "blockUser":
                return <AdminBlocklist />;
            case "deleteUser":
                return <AdminDeletelist/>;
            case "AddAdmin"   :
                return <AddAdmin/>     
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