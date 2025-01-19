import React, {createContext} from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {
    

    return (<UserContext value={{}}>
        {children}
    </UserContext>)
}
