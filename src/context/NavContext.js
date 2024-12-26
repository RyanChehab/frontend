import React,{useState,useEffect,createContext} from 'react';
import fetchData from '../utility/fetch';

export const NavContext = createContext();

export const NavProvider = ({children})=>{
const base_url = process.env.BASE_URL
const [isCollapsed, setIsCollapsed] = useState(false);
const [anchorEl,setAnchorEl] = useState(null);
const [response,setResponse] = useState('');

// functions
const handleOpen = (e)=>{
    setAnchorEl(e.currentTarget)
}
const handleClose = ()=>{
    setAnchorEl(false)
}

const handleLogout = async ()=>{
    try{
        const result = await fetchData(
            `${base_url}/auth/logout`,
            "POST"
        )
        console.log(result.message)
        // setResponse(result.message)
    }catch(error){
        setResponse(error.response.data.error);
    }
        
}
//responsiveness
useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 1128) {
            setIsCollapsed(true); 
        } else {
            setIsCollapsed(false);
        }
    };

    handleResize();

    window.addEventListener('resize', handleResize); 

    return () => {
        window.removeEventListener('resize', handleResize); 
    };
}, []);



return(
    <NavContext.Provider value={{
        isCollapsed,
        setIsCollapsed,
        anchorEl,
        setAnchorEl,
        handleOpen,
        handleClose,
    }}>
        {children}
    </NavContext.Provider>
)
}
