import {React,useContext} from 'react';
import {Typography,Button,AppBar,Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import logo from '../../assets/logo.png';
import './writerNav.css';
const WriterNav = ()=>{
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="nav-links">
                <Link to="/repositories">Repositories</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/bookmarks">Bookmarks</Link>
            </div>
            
        </nav>
    );
}
export default WriterNav;