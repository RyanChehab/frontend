import React,{useEffect,useState,createContext} from 'react';
import fetchData from '../utility/fetch';
export const AdminContext = createContext();

export const AdminProvider = ({children}) => {

    const [loading,setLoading] = useState(false)
    const [response,setResponse] = useState()

    // functions
    const handleBlockUser = ()=>{
        try{
            setLoading(true)
            fetchData(
                "http://localhost:8000/api/block_user",
                "POST",
                {email}
            )
        }catch(error){

        }finally{
            
        }
    }

    return(
        <AdminContext.Provider value={{

        }}>
            {children}
        </AdminContext.Provider>
    )
}