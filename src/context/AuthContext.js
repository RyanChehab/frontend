import React,{useState,useEffect,createContext} from 'react';
import fetchData from '../utility/fetch';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e)=>{
        e.preventDefault()
        setLoading(true);
        setError(null);
        try{
            const result = await fetchData(
                "http://localhost:8000/api/login",
                "POST",
                {email,password}
            )
            setUser(result.user);
            console.log(result.user)
            localStorage.setItem("token", result.token);
        } catch(error){
            console.log(error.response.data.error)
            setError(error.response.data.error);
        } finally{
            setLoading(false)
            console.log('done')
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
            error 
            }}>
            {children}
        </AuthContext.Provider>
    )
}