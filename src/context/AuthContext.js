import React,{useState,useEffect,createContext} from 'react';
import fetchData from '../utility/fetch';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async ()=>{
        setLoading(true);
        setError(null);
        try{
            const result = await fetchData(
                "http://localhost:8000/api/login",
                "POST",
                {email,password}
            )
            
        }catch(error){

        }
    }

    return(
        <AuthContext.Provider value={{
            email,
            setEmail,
            password,
            setPassword
            }}>
            {children}
        </AuthContext.Provider>
    )
}