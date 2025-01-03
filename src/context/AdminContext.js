import React,{useEffect,useState,createContext} from 'react';
import fetchData from '../utility/fetch';
export const AdminContext = createContext();

export const AdminProvider = ({children}) => {

    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [response,setResponse] = useState()

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

    const handleAddAdmin = ()=>{
        try{

        }catch(error){

        }finally{
            
        }
    }

    return(
        <AdminContext.Provider value={{
            password,
            setPassword,
            response,
            loading,
            handleBlockUser
        }}>
            {children}
        </AdminContext.Provider>
    )
}