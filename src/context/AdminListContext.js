import React,{useEffect,useState,createContext} from "react";
import fetchData from '../utility/fetch';

export const AdminListContext = createContext();

export const AdminListProvider = ({children}) => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState();
    const [response,setResponse] = useState('')
    const [open,setOpen] = useState(false);

    const [adminLoading,setAdminLoading] = useState(false)
    const [name,setName] = useState()
    const [adminEmail,setAdminEmail] = useState("");
    const [password,setPassword] = useState("");
    const [ispasswordError,setIsPasswordError] = useState(false)
    const [correct,setCorrect] = useState(false)

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

    const handleCloseNotification = () => {
        setOpen(false);
      };

    const handleDeleteUser = async (email) => {
        try{
            const result = await fetchData(
                "http://localhost:8000/api/delete_user",
                "POST",
                {"email": email},
                {Authorization: `Bearer ${token}`}
            )
            
            if(result.success){
                console.log("Deleting user from state:", email);
                const updateUsers = users.filter((user) => user.email !== email)
                setUsers(updateUsers)
            }
            setResponse(result.massege)
        }catch(error){
            console.error(error)

        }finally{
            setOpen(true)
        }
        
    }

    const handleAddAdmin = async ()=>{
            try{    
                setAdminLoading(true)
                const response = await fetchData(
                    "http://localhost:8000/api/AddAdmin",
                    "POST",
                    {
                        name:{name},
                        email:{adminEmail},
                        password:{password},
                        type:"admin",
                    },
                    {Authorization: `Bearer ${token}`}

                )
                console.log(response)
            }catch(error){
                console.error(error)
            }finally{
                setAdminLoading(false)
            }
        }

        const handlePasswordChange = (value) => {
            setPassword(value);
            if (value !== confirm) {
                setIsPasswordError(true); 
                setCorrect(false)
            } else {
                setIsPasswordError(false); 
                setCorrect(true)
            }
        };

        const handleConfirmChange = (value) => {
            setConfirm(value);
            if (value !== password) {
                setIsPasswordError(true); 
                setCorrect(false)
            } else {
                setIsPasswordError(false);
                setCorrect(true)
            }
        }
    

    return(
        <AdminListContext.Provider value={{
            users,
            setEmail,
            loading,
            handleBlockUser,
            handleunBlockUser,
            handleDeleteUser,
            handleCloseNotification,
            open,
            response,
            setName
        }}>
            {children}
        </AdminListContext.Provider>
    )
}