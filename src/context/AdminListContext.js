import React,{useEffect,useState,createContext} from "react";

export const AdminListContext = createContext();

export const AdminListProvider = ({children}) => {

    return(
        <AdminListContext value={{
            
        }}>
            {children}
        </AdminListContext>
    )
}