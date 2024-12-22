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
    width: '453px',
    height: '46px',
    padding: '0 10px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    fontSize: '16px',
}));

const WriterNav = ()=>{

const [isCollapsed, setIscollapsed] = useState(false);

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 1107) {
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

    return (
        <nav className="navbar flex align-center ">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="nav-links">
                <Link to="/repositories" className='links'>Repositories</Link>
                <Link to="/categories" className='links'>Categories</Link>
                <Link to="/bookmarks" className='links'>Bookmarks</Link>
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