import React,{useState,useEffect,createContext} from 'react';
import fetchData from '../utility/fetch';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    // type for notification
    const [type,setType] = useState('');
    const [open,setOpen] = useState(false);

    const handleLogin = async (e)=>{
        e.preventDefault()
        setLoading(true);
        try{
            const result = await fetchData(
                "http://localhost:8000/api/login",
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
        
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [register,setRegister] = useState('');
    const [regpass,setregpass] = useState('');
    const [usertype,setUsertype] = useState('');
    const [notiType,setNotiType] = useState('');

      const handleSignup = (e)=>{
        e.preventDefault();
        try{

        }catch(error){

        }finally{
            
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
            type
            }}>
            {children}
        </AuthContext.Provider>
    )
}