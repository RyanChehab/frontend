import React,{useEffect,useState,createContext} from "react";
import fetchData from '../utility/fetch';

export const AdminListContext = createContext();

export const AdminListProvider = ({children}) => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState();

    const token = localStorage.getItem("token");

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

    const handleBlockUser = async (email) => {
        try{
            const result = await fetchData(
                "http://localhost:8000/api/block_user",
                "POST",
                {"email": email},
                {Authorization: `Bearer ${token}`}
            )
            console.log(result)

            // update on spot 
            const updatedUsers = users.map((user) => {
                if (user.email === email) {
                    return { ...user, blocked: !user.blocked }; 
                }
                return user;
            });

            setUsers(updatedUsers); 

        }catch(error){
            console.error(error)
        }
    }

    const handleunBlockUser = async (email) => {
        try{
            const result = await fetchData(
                "http://localhost:8000/api/unblock_user",
                "POST",
                {"email": email},
                {Authorization: `Bearer ${token}`}
            )
            console.log(result)

            // update on spot 
            const updatedUsers = users.map((user) => {
                if (user.email === email) {
                    return { ...user, blocked: !user.blocked }; 
                }
                return user;
            });

            setUsers(updatedUsers); 

        }catch(error){
            console.error(error)
        }
        
    }

    const handleDeleteUser = async (email) => {
        try{
            const result = await fetchData(
                "http://localhost:8000/api/delete_user",
                "POST",
                {"email": email},
                {Authorization: `Bearer ${token}`}
            )

        }catch(error){
            console.error(error)
        }
        
    }

    return(
        <AdminListContext.Provider value={{
            users,
            setEmail,
            loading,
            handleBlockUser,
            handleunBlockUser
        }}>
            {children}
        </AdminListContext.Provider>
    )
}