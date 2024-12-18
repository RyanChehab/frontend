import React,{useContext} from 'react';
import './login.css';
import '../../css/utilities.css';
import { Box, TextField, Button, Typography, Snackbar, Alert, Slide} from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

const Signup = () => {

    return(
        <box
        sx={{
        boxShadow:5,
        borderRadius: '10px',
        padding: '16px',
        width: '295px',
        height: '430px',
        margin: '4rem auto',
        background: '#FFF',
        }}
        >
        </box>
    )
}

export default Signup;