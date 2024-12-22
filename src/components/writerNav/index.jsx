import {React,useContext} from 'react';
import {Typography,Button,AppBar,Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import logo from '../../assets/logo.png';
import './writerNav.css';

const SearchBar = styled(InputBase)(({ theme }) => ({
    width: '453px',
    height: '46px',
    padding: '0 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
}));

const WriterNav = ()=>{
    return (
        <nav className="navbar">
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

        </nav>
    );
}
export default WriterNav;