import React,{useState,useEffect,createContext} from 'react';
import fetchData from '../utility/fetch';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


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