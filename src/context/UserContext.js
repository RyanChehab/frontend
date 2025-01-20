import React, {useState,createContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const location = useLocation()
    const [initialized,setInitialized] = useState(false)
    const [show,setShow] = useState(false)

    
useEffect(() => {
    const initializeState = async () => {
        const userTypeStorage = localStorage.getItem('type');
        

        // Wait for `usertype` to update
        if (userTypeStorage === "writer") {
            setShow(true);
        } else {
            setShow(false);
        }

        setInitialized(true); 
    };

    initializeState();
}, [location.pathname]);


    return (<UserContext.Provider value={{show,initialized}}>
        {children}
    </UserContext.Provider>)
}
