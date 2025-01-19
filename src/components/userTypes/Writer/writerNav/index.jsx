import {React,useContext,useState,useEffect,useRef} from 'react';
import {Typography,Button,AppBar,Toolbar,Avatar, Menu, MenuItem} from '@mui/material';
import Dropzone from "dropzone"
import { NavContext } from '../../../../context/NavContext';
import {Link,useNavigate} from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from './../../../../assets/logo.png';
import SearchStories from '../../../utilities/search';
import '../../../../css/utilities.css';
import './writerNav.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const WriterNav = () => {

    const navigate = useNavigate();
    const base_url = process.env.BASE_URL;
    const {isCollapsed,anchorEl,handleOpen,handleClose,handleLogout,handleNavigate} = useContext(NavContext)
    
    // dropzone
    const [profilePic,setProfilePic] = useState(localStorage.getItem("avatar_url"));
    const dropzoneRef = useRef(null);
    
    // Dropzone 
    useEffect(()=>{
        const token = localStorage.getItem("token");
        const ProfilePicDropzone = new Dropzone(dropzoneRef.current,{
            url: `${base_url}/upload`,
            url:"http://localhost:8000/api/upload",
            paramName: "profile_pic",
            maxFiles: 1,
            maxFilesize: 2, //mb
            acceptedFiles: "image/jpeg,image/png",
            autoProcessQueue: true,
            headers:{
                Authorization: `Bearer ${token}`
            },
    
            init: function () {
                this.on("success", (file, response) => {
                    console.log("File uploaded successfully:", response.url);
                    setProfilePic(response.url);
                });
                this.on("error", (file, errorMessage) => {
                    console.error("Upload error:", errorMessage);
                    alert("Error uploading profile picture: " + errorMessage.error);
    
                    if(errorMessage.error === "Token has expired"){
                        localStorage.removeItem("token");
    
                            // Redirect to login
                            navigate("/");
                    }
    
                    this.removeFile(file);
                });
    
            }
        })
        // saving the instance 
        dropzoneRef.current.dropzone = ProfilePicDropzone;
    
        console.log(dropzoneRef.current.dropzone)
        return ()=>{
            ProfilePicDropzone.destroy(); //cleanup dropzone instance 
        }
    },[])
    
    const handleUploadClick = () => {
        const dropzoneInstance = dropzoneRef.current.dropzone;
        if (dropzoneInstance) {
            dropzoneInstance.hiddenFileInput.click(); // Trigger the file dialog
        } else {
            console.error("Dropzone instance not found!");
        }
    };

                            // collapsed
    return isCollapsed ? (
    
        // Collapsed Navbar
    <>
        <nav className="collapsed-navbar">
           <div className="d-flex align-items-center justify-content-between">
    
                <div onClick={() => navigate("/writer")}>
                    <img src={logo} alt="logo" className="collapsed-img-logo"/>
                </div>
                <div className="d-flex gap-5 align-items-center">
                    <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                    >
                        <button className="hamburger-menu">
                            <i className="fas fa-bars"></i>
                        </button>
                    </button>  
                    
                    <div className="CollapsedprofilePic" ref={dropzoneRef}>
                        <Avatar
                        src={profilePic}
                        onClick={handleOpen}
                        sx={{ width: 40, height: 40}}
                        />
                    </div>
        
                    <Menu
                        disableAutoFocusItem
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom', 
                            horizontal: 'center', 
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center', 
                        }}
                    >
                        <MenuItem onClick={handleUploadClick}><PersonAddIcon style={{fontSize: 15, color: '#FC8E40'}} />Add Profile Picture</MenuItem>
                        <MenuItem onClick={handleLogout}><LogoutIcon style={{ fontSize: 15, color: '#FC8E40' }} />  Logout</MenuItem>
                    </Menu>
                </div>
           </div>
    
           <div
                className="offcanvas offcanvas-top"
                id="offcanvasNavbar"
                tabIndex="-1"
                aria-labelledby="offcanvasNavbarLabel"
            >
                    <div className="offcanvas-header ">
                    
                        <div onClick={()=>navigate("/writer")}>
                                    <img src={logo} alt="logo" className="offcanvas-logo" />
                        </div>
                                
                        <div className="search-bar mx-auto">
                        <SearchStories/>
                    </div>
    
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
    
                                {/* offcanvas body */}
                <div className="offcanvas-body d-flex flex-column">
                
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link" onClick = {()=>navigate('/repositories')}>
                            Repositories
                            </div>
                            <hr />
                        </li>
                        
                        <li className="nav-item">
                            <div onClick={()=>navigate("/Categories")} className="nav-link">
                            Categories
                            </div>
                            <hr />
                        </li>
                        
                        <li className="nav-item">
                            <div onClick={()=>navigate("/bookmarks")} className="nav-link">
                            Bookmarks
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <hr />
    </>
    ) : (
                            // Normal nav
    <>
            <nav className="navbar d-flex align-items-center justify-content-between">

            <div onClick={()=>navigate("/writer")}>
                <img src={logo} alt="logo" className="offcanvas-logo" />
            </div>
    
                <div className="nav-links">
                    <Link to="/repositories" className='links fs-5 fs-md-6 fs-sm-6'>Repositories</Link>
                    <Link to="/categories" className='links fs-5 fs-md-6fs-sm-6'>Categories</Link>
                    <Link to="/bookmarks" className='links fs-5 fs-md-6 fs-sm-6'>Bookmarks</Link>
                </div>
    
                <div className="search-bar">
                    <SearchStories/>
                </div>
    
                <div className="profilePic" ref={dropzoneRef}>
                    <Avatar
                    src={profilePic}
                    onClick={handleOpen}
                    sx={{ width: 40, height: 40}}
                    />
                </div>
    
                <Menu
                    disableAutoFocusItem
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom', 
                        horizontal: 'center', 
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center', 
                    }}
                >
                    <MenuItem onClick={handleUploadClick}><PersonAddIcon style={{fontSize: 15, color: '#FC8E40'}} />Add Profile Picture</MenuItem>
                    <MenuItem onClick={handleLogout}><LogoutIcon style={{ fontSize: 15, color: '#FC8E40' }} />  Logout</MenuItem>
                </Menu>
            </nav>
            
            <hr className='line'/>
    </>
        );
    }
    export default WriterNav;