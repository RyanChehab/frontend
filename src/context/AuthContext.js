import React,{useState,useEffect,createContext} from 'react';
import fetchData from '../utility/fetch';
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    // for login and signup
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [user_type,setUsertype] = useState('');
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [confirm,setConfirm] = useState('');
    // type for notification
    const [type,setType] = useState('');
    const [open,setOpen] = useState(false);
    const [ispasswordError,setIsPasswordError] = useState(false)
    const handleLogin = async (e)=>{
        e.preventDefault()
        setLoading(true);
        try{
            const result = await fetchData(
                "http://localhost:8000/api/auth/login",
                "POST",
                {email,password}
            )
            setUser(result.user);
            setResponse(result.message);
            setType("success")
            localStorage.setItem("token", result.token);
        } catch(error){
            setResponse(error.response.data.error);
            setType("error")
        } finally{
            setLoading(false)
            setOpen(true)
            console.log('done')
        }
    }
    const handleCloseNotification = () => {
        setOpen(false);
      };
//end login
//####################################################################
        const handlePasswordChange = (value) => {
            setPassword(value);
            if (value !== confirm) {
                setIsPasswordError(true); 
            } else {
                setIsPasswordError(false); 
            }
        };

        const handleConfirmChange = (value) => {
            setConfirm(value);
            if (value !== password) {
                setIsPasswordError(true); 
            } else {
                setIsPasswordError(false);
            }
        }

      const handleSignup = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try{
                const result = await fetchData(
                    "http://localhost:8000/api/auth/signup",
                    "POST",
                    {name,username,email,password,user_type}
                )
                setUser(result.user);
                setResponse(result.message);
                setType("success")
                localStorage.setItem("token", result.token);
            }catch(error){
                setType("error")
                setResponse(error.response.data.message)
            }finally{
                setLoading(false)
                setOpen(true)
            }
        }

    return(
        <AuthContext.Provider value={{
            email,
            setEmail,
            password,
            setPassword,
            user, 
            handleLogin, 
            loading, 
            response,
            handleCloseNotification,
            open,
            type,
            name,
            username,
            user_type,
            setName,
            setUsername,
            setUsertype,
            handleSignup,
            confirm,
            setConfirm,
            handlePasswordChange,
            handleConfirmChange,
            ispasswordError
            }}>
            {children}
        </AuthContext.Provider>
    )
}