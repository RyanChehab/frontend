import React,{useContext} from 'react';
import './login.css';
import '../../css/utilities.css';
import { Box, TextField, Button, Typography, Snackbar, Alert, Slide} from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { Link, Navigate } from 'react-router-dom';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

const Login = () => {
    const {email,setEmail,password,setPassword,handleLogin,response,loading,open,type, handleCloseNotification} = useContext(AuthContext)
    
    return (
<>
        <div className='header flex align-center mt-4'>
        <p className='title'>Fan Tales</p>
        </div>

        <Box
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

        <Typography
          variant="h4"
          sx={{
            fontSize:'16px',
            padding: '16px 0',
            textAlign: 'center',
            fontFamily: 'Roboto',
          }}
        >
          <span className='welcome'>Welcome </span>  back to where your story continues
        </Typography>
    
    <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          inputProps={{ maxLength: 250 }}
     
        //   context
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        
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
                onChange={(e)=>setPassword(e.target.value)}
                value={password}

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
        disabled = {loading}
        sx={{
            width: '45%',
            borderRadius: '10px',
            margin: '60px auto 0px auto',
            display: 'block',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            fontSize: '14px',
            border: 'black 2px solid',
            '&:hover': {
                border:'solid 2px #FC8E40',
            }
        }}
        >
            {loading? "Logging in..": "Login"}
        </Button>
    </form>
        <br />
        <p className='link'>Don't have an account? <Link to="signup" className='linkto'>Sign up now!</Link></p>
        </Box>

        {/* Notification */}

        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert
            severity={type}
            sx = {{width: "100%"}}
            >
                {response}
            </Alert>
        </Snackbar>
</>
    );
};

export default Login;