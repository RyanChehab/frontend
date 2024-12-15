import React from 'react';
import './login.css';
import '../../css/utilities.css';
import logo from '../../assets/logo.png';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {

    
    return (
<>
        <div className='header flex align-center mt-1'>
        <img src={logo} alt="Fan Tales Logo" className='logo'/>
        <p className='title'>Fan Tales</p>
        </div>

        <Box
        sx={{
            border: '3px solid #FC8E40',
            borderRadius: '10px',
            padding: '16px',
            width: '295px',
            height: '430px',
            margin: '0 auto',
            background: '#FFF',
        }}
        >

        <Typography
          variant="h4"
          sx={{
            fontSize:'37px',
            padding: '16px 0',
            textAlign: 'center',
            fontFamily: 'Roboto',
          }}
        >
          Login
        </Typography>
    
    <form>
        <TextField
          label="Email"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          inputProps={{ maxLength: 250 }}

          sx={{
            fontFamily: 'Roboto, sans-serif',
            marginTop: '20px', 
            display: 'block',   
            fontFamily: 'Roboto, sans-serif',
            
            '& .MuiOutlinedInput-root': {
     
                '& fieldset': {
                    borderColor: '#000', 
                },
                
                '&.Mui-focused fieldset': {
                    borderColor: '#000',
                },

            },

                '& .MuiInputLabel-root': {
                color: '#000',
                fontFamily: 'Roboto, sans-serif',
                },

                '& .MuiInputLabel-root.Mui-focused': {
                color: '#FC8E40',
                },
  }} />

        <TextField
                label="password"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                inputProps={{ maxLength: 250 }}

                sx={{
                    fontFamily: 'Roboto, sans-serif',
                    marginTop: '40px', 
                    display: 'block',   
                    fontFamily: 'Roboto, sans-serif',
                    
                    '& .MuiOutlinedInput-root': {
            
                        '& fieldset': {
                            borderColor: '#000', 
                        },
                        
                        '&.Mui-focused fieldset': {
                            borderColor: '#000',
                        },

                    },

                        '& .MuiInputLabel-root': {
                        color: '#000',
                        fontFamily: 'Roboto, sans-serif',
                        },

                        '& .MuiInputLabel-root.Mui-focused': {
                        color: '#FC8E40',
                        },
        }} />

        <Button
        variant='contained'
        color='#FC8E40'
        type='submit'
        sx={{
            width: '35%',
            borderRadius: '10px',
            margin: '60px auto 0px auto',
            display: 'block',
            padding: '15',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '600',
            fontSize: '16px',
            border: 'black 2px solid',
            '&:hover': {
                border:'solid 2px #FC8E40',
            }
        }}
        >
            login
        </Button>
    </form>
        <br />
        <p className='link'>Don't have an account? <u>Sign up now!</u></p>
        </Box>
</>
    );
};

export default Login;