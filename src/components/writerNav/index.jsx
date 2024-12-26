import {React,useContext,useState,useEffect,useRef} from 'react';
import {Typography,Button,AppBar,Toolbar,Avatar, Menu, MenuItem} from '@mui/material';
import Dropzone from "dropzone"
import { NavContext } from '../../context/NavContext';
import {Link} from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

// import SettingsIcon from '@mui/icons-material/settings';
// import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../.././assets/logo.png';
import '../../css/utilities.css';
import './writerNav.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const WriterNav = () => {

const base_url = process.env.BASE_URL;
const {isCollapsed,anchorEl,handleOpen,handleClose} = useContext(NavContext)

// dropzone
const [profilePic,setProfilePic] = useState(localStorage.getItem("avatar_url"));
const dropzoneRef = useRef(null);

// Dropzone 
useEffect(()=>{
    const ProfilePicDropzone = new Dropzone(dropzoneRef.current,{
        url: `${base_url}upload`,
        url:"http://localhost:8000/api/upload",
        paramName: "profile_pic",
        maxFiles: 1,
        maxFilesize: 2, //mb
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
    // saving the instance 
    dropzoneRef.current.dropzone = ProfilePicDropzone;

    console.log(dropzoneRef.current.dropzone)
    return ()=>{
        ProfilePicDropzone.destroy(); //cleanup dropzone instance 
    }
},[base_url])

const handleUploadClick = () => {
    const dropzoneInstance = dropzoneRef.current.dropzone;
    if (dropzoneInstance) {
        dropzoneInstance.hiddenFileInput.click(); // Trigger the file dialog
    } else {
        console.error("Dropzone instance not found!");
    }
};

const SearchBar = styled(InputBase)(({ theme }) => ({
    minWidth: '100px',
    maxWidth: '453px',
    height: '46px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    fontSize: '16px',
}));

                        // collapsed
return isCollapsed ? (

    // Collapsed Navbar
<>
    <nav className="collapsed-navbar">
       <div className="d-flex align-items-center justify-content-between">

            <Link to="/" style={{ textDecoration: 'none'}}>
                <img src={logo} alt="logo" />
            </Link>

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
            
            <div className="profilePic" ref={dropzoneRef}>
                <Avatar
                src={profilePic}
                onClick={handleOpen}
                sx={{ width: 50, height: 50,border: '3px solid #FC8E40'}}
                />
            </div>
       </div>

       <div
            className="offcanvas offcanvas-top"
            id="offcanvasNavbar"
            tabIndex="-1"
            aria-labelledby="offcanvasNavbarLabel"
        >
                <div className="offcanvas-header ">
                
                    <Link to="/" style={{ textDecoration: 'none'}}>
                                <img src={logo} alt="logo" className="offcanvas-logo" />
                    </Link>
                            
                    <div className="search-bar mx-auto">
                                <SearchBar placeholder="Search books..."
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <i className="fas fa-search" style={{ color: '#ccc' }}></i>
                                        </InputAdornment>
                                    }
                                />
                </div>

                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>

                            {/* offcanvas body */}
            <div className="offcanvas-body d-flex flex-column justify-items-center align-items-center">
            
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/repositories" className="nav-link">
                        Repositories
                        </Link>
                        <hr />
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link">
                        Categories
                        </Link>
                        <hr />
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/bookmarks" className="nav-link">
                        Bookmarks
                        </Link>
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
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="nav-links">
                <Link to="/repositories" className='links fs-5 fs-md-6 fs-sm-6'>Repositories</Link>
                <Link to="/categories" className='links fs-5 fs-md-6fs-sm-6'>Categories</Link>
                <Link to="/bookmarks" className='links fs-5 fs-md-6 fs-sm-6'>Bookmarks</Link>
            </div>

            <div className="search-bar">
                <SearchBar placeholder="Search..."
                    startAdornment={
                        <InputAdornment position="start">
                            <i className="fas fa-search" style={{ color: '#ccc' }}></i>
                        </InputAdornment>
                    }
                />
            </div>

            <div className="profilePic" ref={dropzoneRef}>
                <Avatar
                src={profilePic}
                onClick={handleOpen}
                sx={{ width: 50, height: 50,border: '3px solid #FC8E40'}}
                />
            </div>

            <Menu
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
                <MenuItem onClick={handleUploadClick}>Add Profile Picture</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </nav>
        
        <hr className='line'/>
</>
    );
}
export default WriterNav;