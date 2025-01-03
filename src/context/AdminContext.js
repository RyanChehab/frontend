import React,{useEffect,useState,createContext} from 'react';
import fetchData from '../utility/fetch';
export const AdminContext = createContext();

export const AdminProvider = ({children}) => {

    const [loading,setLoading] = useState(false)
    const [adminLoading,setAdminLoading] = useState(false)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [response,setResponse] = useState()
    const [activeMenuItem, setActiveMenuItem] = useState("blockUser");

    const handleAddAdmin = async ()=>{
        try{    
            setAdminLoading(true)
            const response = await fetchData(
        
            )
            console.log(response)
        }catch(error){
            console.error(error)
        }finally{
            setAdminLoading(false)
        }
    }

    const handleDeleteUser = async () =>{
        try{

        }catch(error){

        }
    }

    return(
        <AdminContext.Provider value={{
            password,
            setPassword,
            response,
            loading,
            activeMenuItem,
            setActiveMenuItem,
            handleDeleteUser
        }}>
            {children}
        </AdminContext.Provider>
    )
}