import React, {useState,createContext, useEffect} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const token = localStorage.getItem('token')
    const [usertype,setUsertype] = useState('');
    const [show,setShow] = useState(false)
    
    useEffect(()=>{

        const userTypeStorage = localStorage.getItem('type')
        
        setUsertype(userTypeStorage)

        if (userTypeStorage === "writer") {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [token]);


    return (<UserContext.Provider value={{show}}>
        {children}
    </UserContext.Provider>)
}
