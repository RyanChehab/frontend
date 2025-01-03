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

    // functions
    const handleBlockUser = async ()=>{
        try{
            setLoading(true)
            const response = await fetchData(
                "http://localhost:8000/api/block_user",
                "POST",
                {email}
            )
            console.log(response)
        }catch(error){
            console.error(error)
        }finally{
            setLoading(false)
        }
    }

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

    return(
        <AdminContext.Provider value={{
            password,
            setPassword,
            response,
            loading,
            handleBlockUser,
            activeMenuItem,
            setActiveMenuItem
        }}>
            {children}
        </AdminContext.Provider>
    )
}