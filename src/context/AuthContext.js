import React,{useState,useEffect,createContext} from 'react';
import fetchData from '../utility/fetch';
import { useNavigate, useLocation } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const navigate = useNavigate();
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
    const [correct,setCorrect] = useState(false)
    // type for notification
    const [type,setType] = useState('');
    const [open,setOpen] = useState(false);
    const [ispasswordError,setIsPasswordError] = useState(false)

    useEffect(()=>{
            setEmail("")
            setPassword("")
            setUser("")
            setResponse(null)
            setUsertype("")
            setName("")
            setUsername("")
            setConfirm("")
            setCorrect(false)
            setType("")
            setOpen(false)
    },[useLocation()])

    // login function
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
            // save token
            localStorage.setItem("token", result.token);
            localStorage.setItem("name", result.user.name)
            // save avatar_url
            localStorage.setItem("avatar_url",result.user.avatar_url)

            if (result.user.user_type === "writer") {
                navigate("writer");
                localStorage.setItem("type", result.user.user_type);
            } else if (result.user.userType === "reader") {
                navigate("/reader-dashboard");
            } else{
                navigate("adminPanel")
            }
        } catch(error){
            setResponse(error.response.data.error);
            setType("error")
        } finally{
            setLoading(false)
            setOpen(true)
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

      const handleSignup = async (e)=>{
        e.preventDefault();
            if(correct){
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
                    navigate("writer");
                }catch(error){
                    setType("error")
                    setResponse(error.response.data.message)
                }finally{
                    setLoading(false)
                    setOpen(true)
                }
            }else{
                alert('confirm password')
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