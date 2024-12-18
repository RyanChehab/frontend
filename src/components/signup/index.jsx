import React,{useContext} from 'react';
import './signup.css';
import '../../css/utilities.css';
import { Box, TextField, Button, Typography, Snackbar, Alert, Slide, FormHelperText} from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

const Signup = () => {

    return(
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
                    }}/>

                    <TextField
                    label="Confirm Password"
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
                        }}/>

            </form>
        </Box>
    )
}

export default Signup;