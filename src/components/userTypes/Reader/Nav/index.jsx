import {React,useContext} from 'react';
import {Avatar, Menu, MenuItem} from '@mui/material';
import { NavContext } from '../../../../context/NavContext';
import {Link,useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from './../../../../assets/logo.png';
import SearchStories from '../../../utilities/search';
import '../../../../css/utilities.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ReaderNav = () => {

    const navigate = useNavigate();
    const {isCollapsed,anchorEl,handleOpen,handleClose,handleLogout} = useContext(NavContext)
    

    // collapsed
    return isCollapsed ? (

        // Collapsed Navbar
    <>
        <nav className="collapsed-navbar">
            <div className="d-flex align-items-center justify-content-between">
    
                <div onClick={() => navigate("/reader")}>
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
                    
                    <div className="CollapsedprofilePic">
                        <Avatar
                        onClick={handleOpen}
                        sx={{ width: 50, height: 50}}
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
                        <MenuItem onClick={handleLogout}><LogoutIcon style={{ fontSize: 15, color: '#FC8E40' }} /> &nbsp;Logout</MenuItem>
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
                    
                        <div onClick={()=>navigate("/reader")}>
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
                            <div className="nav-link" onClick = {()=>navigate('/ReaderRepo')}>
                            Repositories
                            </div>
                            <hr />
                        </li>

                        <li className="nav-item">
                            <div className="nav-link" onClick = {()=>navigate('/ReaderBooks')}>
                            Books
                            </div>
                            <hr />
                        </li>
                        
                        <li className="nav-item">
                            <div onClick={()=>navigate("/Readerbookmarks")} className="nav-link">
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

            <div onClick={()=>navigate("/reader")}>
                <img src={logo} alt="logo" className="offcanvas-logo" />
            </div>
    
                <div className="nav-links">
                    <Link to="/ReaderRepo" className='links fs-5 fs-md-6 fs-sm-6'>Repositories</Link>
                    <Link to="/ReaderBooks" className='links fs-5 fs-md-6fs-sm-6'>Books</Link>
                    <Link to="/Readerbookmarks" className='links fs-5 fs-md-6 fs-sm-6'>Bookmarks</Link>
                </div>
    
                <div className="search-bar">
                    <SearchStories/>
                </div>
    
                <div className="profilePic">
                    <Avatar
                    onClick={handleOpen}
                    sx={{ width: 50, height: 50}}
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
            
                    <MenuItem onClick={handleLogout}><LogoutIcon style={{ fontSize: 15, color: '#FC8E40' }} />  Logout</MenuItem>
                </Menu>
            </nav>
            
            <hr className='line'/>
    </>
        );
    }
                        
    
    export default ReaderNav;