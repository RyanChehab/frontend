import React,{useState,useEffect,createContext,useCallback}
from 'react';
import debounce from "lodash/debounce";
import fetchData from '../utility/fetch';
import { useLocation, useNavigate } from "react-router-dom";

export const NavContext = createContext();

export const NavProvider = ({children})=>{

const navigate = useNavigate();
const [isCollapsed, setIsCollapsed] = useState(false);
const [anchorEl,setAnchorEl] = useState(null);
const [response,setResponse] = useState('');

const [searchTerm, setSearchTerm] = useState("");
const [results, setResults] = useState([]);
const [searchLoad,setSearchLoad] = useState();

// clearing localStorage
const location = useLocation()
useEffect(() => {

        if (location.pathname === "/" || location.pathname === "/signup") {
            localStorage.clear();
            console.log("Local storage cleared!");
        }
    }, [location.pathname]);

// functions
const handleOpen = (e)=>{
    setAnchorEl(e.currentTarget)
}
const handleClose = ()=>{
    setAnchorEl(false)
}
// logout
const handleLogout = async ()=>{
    const token = localStorage.getItem("token");
    try{
        const result = await fetchData(
            "http://localhost:8000/api/auth/logout",
            "POST",
            null,
            {
                Authorization: `Bearer ${token}`
            }
        )
        localStorage.clear();
        handleClose()
        // setResponse(result.message)
        navigate("/");
    }catch(error){
        setResponse(error.response.data.error);
        console.log(error.message)
    }
}

// Search
const debounceSearch = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setSearchLoad(true);
      try {
        const response = await fetchData(
          `https://gutendex.com/books/?search=${encodeURIComponent(query)}`,
          "GET"
        );
        setResults(response.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResults([]);
      } finally {
        setSearchLoad(false);
      }
    }, 300), //300ms delay
    []
  );

  // Update the search term and trigger api 
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    debounceSearch(query);
  };
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
        searchLoad,
        results,
        searchTerm,
        handleInputChange,
    }}>
        {children}
    </NavContext.Provider>
)
}
