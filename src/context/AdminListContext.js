import React,{useEffect,useState,createContext} from "react";
import fetchData from '../utility/fetch';

export const AdminListContext = createContext();

export const AdminListProvider = ({children}) => {

    const [users,setUsers] = useState([]);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState("");
    const [ispasswordError,setIsPasswordError] = useState(false);
    const [correct,setCorrect] = useState(false)
    const [response,setResponse] = useState('');
    const [open,setOpen] = useState(false);
    const [adminOpen,setAdminOpen] = useState(false);
    const [confirm,setConfirm] = useState('');
    const [Loading,setLoading] = useState("")
    const [name,setName] = useState();
    const [type,setType] = useState("");
    

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
            
            if(result.success){
                console.log("Deleting user from state:", email);
                const updateUsers = users.filter((user) => user.email !== email)
                setUsers(updateUsers)
            }
        }catch(error){
            console.error(error)

        }finally{
            setOpen(true)
        }
        
    }
    
    const handleCloseNotification = () => {
        setOpen(false);
        setAdminOpen(false)
      };

    const handleAddAdmin = async (e)=>{
            try{    
                e.preventDefault()
                setLoading(true)
                const response = await fetchData(
                    "http://localhost:8000/api/AddAdmin",
                    "POST",
                    {name,email,password,user_type:"admin"},
                    {Authorization: `Bearer ${token}`}

                )
                console.log(response)
                setResponse(response.message)
            }catch(error){
                console.error(error)
            }finally{
                setLoading(false)
                setAdminOpen(true)
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
            handleBlockUser,
            handleunBlockUser,
            handleDeleteUser,
            handleCloseNotification,
            open,
            response,
            password,
            name,
            setName,
            handleAddAdmin,
            email,
            setEmail,
            handlePasswordChange,
            handleConfirmChange,
            ispasswordError,
            confirm,
            type,
            response,
            adminOpen
        }}>
            {children}
        </AdminListContext.Provider>
    )
}