import React,{useState,useEffect,createContext} from 'react';
import Dropzone from "dropzone"

export const NavContext = createContext();

export const NavProvider = ({children})=>{

const [isCollapsed, setIsCollapsed] = useState(false);
const [anchorEl,setAnchorEl] = useState(null);
const [profilePic,setProfilePic] = useState('');

// functions
const handleOpen = (e)=>{
    setAnchorEl(e.currentTarget)
}
const handleClose = ()=>{
    setAnchorEl(false)
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

// dropzone
useEffect(()=>{
    const ProfilePicDropzone = new Dropzone("#profilePic",{
        url: "/upload-profile-pic",
        paramName: "profile_pic",
        maxFiles: 1,
        maxFilesize: 2, //mbt
        acceptedFiles: "image/jpeg,image/png",
        autoProcessQueue: true,

        init: function () {
            this.on("success", (file, response) => {
                console.log("File uploaded successfully:", response.url);
                setProfilePic(response.url);
            });
            this.on("error", (file, errorMessage) => {
                console.error("Upload error:", errorMessage);
                alert("Error uploading profile picture: " + errorMessage);
            });

        }
    })
})
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
