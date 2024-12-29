import React,{useState,useEffect,createContext} from 'react';
import fetchData from '../utility/fetch';
import { useNavigate } from "react-router-dom";

export const NavContext = createContext();

export const NavProvider = ({children})=>{

const navigate = useNavigate();
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
    const token = localStorage.getItem("token");
    console.log(base_url)
    try{
        const result = await fetchData(
            "http://localhost:8000/api/auth/logout",
            "POST",
            null,
            {
                Authorization: `Bearer ${token}`
            }
        )
        console.log(result.message)
        localStorage.removeItem("token");
        handleClose()
        // setResponse(result.message)
        navigate("/");
    }catch(error){
        setResponse(error.response.data.error);
        console.log(error.message)
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
        handleLogout,
    }}>
        {children}
    </NavContext.Provider>
)
}
