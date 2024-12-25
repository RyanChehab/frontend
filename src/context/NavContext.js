import React,{useState,useEffect,createContext} from 'react';

const NavContext = createContext();

const NavProvider = ({children})=>{

const [isCollapsed, setIsCollapsed] = useState(false);
const [anchorEl,setAnchorEl] = useState(null);

const handleOpen = (e)=>{
    setAnchorEl(e.currentTarget)
}
const handleClose = ()=>{
    setAnchorEl(false)
}

}