import {React,useContext,useState,useEffect} from 'react';
import {Typography,Button,AppBar,Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import '../../css/utilities.css';
import './writerNav.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const SearchBar = styled(InputBase)(({ theme }) => ({
    minWidth: '100px',
    maxWidth: '453px',
    height: '46px',
    padding: '0 10px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    fontSize: '16px',
}));

const WriterNav = ()=>{

const [isCollapsed, setIsCollapsed] = useState(false);

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

                        // collapsed
return isCollapsed ? (

    // Collapsed Navbar
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
) : (
                        // Normal nav
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

            <div className="profilePic">
                <img src="" alt="profilepic" />
            </div>

        </nav>
    );
}
export default WriterNav;