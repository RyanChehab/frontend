import React, {useState,createContext} from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {

    const [usertype,setUsertype] = useState('');
    const [show,setShow] = useState(false)

    setUsertype(localStorage.getItem('type'))

    if (usertype==='writer'){
        setShow(true);
    }

    return (<UserContext value={{}}>
        {children}
    </UserContext>)
}
