import React,{useContext} from 'react';
import './signup.css';
import '../../css/utilities.css';
import { Box, TextField, Button, Typography, Snackbar, Alert, Slide, FormHelperText} from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

const Signup = () => {

    return(
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
        height: '530px',
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
                    >Your <span className='adventure'>Adventure</span> awaits. Let’s get started!
            </Typography>

            <form>
                <TextField
                label="Name"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                inputProps={{ maxLength: 250 }}
                sx={{
                    fontFamily: 'Roboto, sans-serif',
                    marginTop: '20px', 
                    display: 'block',   
                    fontFamily: 'Roboto, sans-serif',
                    
                    '& .MuiOutlinedInput-root': {

                        height: "40px",
             
                        '& fieldset': {
                            borderColor: '#000', 
                        },
                        
                        '&.Mui-focused fieldset': {
                            borderColor: '#000',
                        },
        
                    },
        
                        '& .MuiInputLabel-root': {
                        top: "-8px",
                        color: '#000',
                        fontFamily: 'Roboto, sans-serif',
                        },
        
                        '& .MuiInputLabel-root.Mui-focused': {
                        color: '#FC8E40',
                        },
                    }}/>
                

                <TextField
                label="Username"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                inputProps={{ maxLength: 250 }}
                sx={{
                    fontFamily: 'Roboto, sans-serif',
                    marginTop: '25px', 
                    display: 'block',   
                    fontFamily: 'Roboto, sans-serif',
                    
                    '& .MuiOutlinedInput-root': {
                        height: "40px",

                        '& fieldset': {
                            borderColor: '#000', 
                        },
                        
                        '&.Mui-focused fieldset': {
                            borderColor: '#000',
                        },
        
                    },
        
                        '& .MuiInputLabel-root': {
                        top: "-8px",
                        color: '#000',
                        fontFamily: 'Roboto, sans-serif',
                        },
        
                        '& .MuiInputLabel-root.Mui-focused': {
                        color: '#FC8E40',
                        },
                    }}/>
                
                {/* alert msg  */}
                <FormHelperText 
                
                sx={{ color: "red", marginLeft: "10px", fontSize: '10px', color: "transparent"}}>
                Username already taken
                </FormHelperText>

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
                    marginTop: '1px', 
                    display: 'block',   
                    fontFamily: 'Roboto, sans-serif',
                    
                    '& .MuiOutlinedInput-root': {
                        height: "40px",

                        '& fieldset': {
                            borderColor: '#000', 
                        },
                        
                        '&.Mui-focused fieldset': {
                            borderColor: '#000',
                        },
        
                    },
        
                        '& .MuiInputLabel-root': {
                        top: "-8px",
                        color: '#000',
                        fontFamily: 'Roboto, sans-serif',
                        },
        
                        '& .MuiInputLabel-root.Mui-focused': {
                        color: '#FC8E40',
                        },
                    }}/>
                <FormHelperText 
                
                sx={{ color: "red", marginLeft: "10px", fontSize: '10px', color: "red"}}>
                passwords dont match 
                </FormHelperText>

                <TextField
                label="Confirm Password"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                inputProps={{ maxLength: 250 }}
                sx={{
                    fontFamily: 'Roboto, sans-serif',
                     
                    display: 'block',   
                    fontFamily: 'Roboto, sans-serif',
                    
                    '& .MuiOutlinedInput-root': {
                        height: "40px",
            
                        '& fieldset': {
                            borderColor: '#000', 
                        },
                        
                        '&.Mui-focused fieldset': {
                            borderColor: '#000',
                        },
        
                    },
        
                        '& .MuiInputLabel-root': {
                        top: "-8px",
                        color: '#000',
                        fontFamily: 'Roboto, sans-serif',
                        },
        
                        '& .MuiInputLabel-root.Mui-focused': {
                        color: '#FC8E40',
                        },
                    }}/>

                <FormHelperText  
                sx={{ color: "red", marginLeft: "10px", fontSize: '10px', color: "red"}}>
                passwords dont match 
                </FormHelperText>
                    

            </form>
        </Box>
</>
    )
}

export default Signup;