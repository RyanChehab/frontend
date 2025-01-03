import React,{useEffect,useState,createContext} from "react";
import fetchData from '../utility/fetch';

export const AdminListContext = createContext();

export const AdminListProvider = ({children}) => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{

        const getUsers = async () => {
            try{
                const response = await fetchData(
                    "http://localhost:8000/api/auth/getUsers",
                    "POST"
                )
                console.log(response.data)
                setUsers(response.data)
            }catch(error){
                console.error(error)
            }
        }

        getUsers();

    },[])
    return(
        <AdminListContext.Provider value={{
            users
        }}>
            {children}
        </AdminListContext.Provider>
    )
}