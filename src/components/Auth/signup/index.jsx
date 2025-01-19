import React,{useContext} from 'react';
import './signup.css';
import '../../../css/utilities.css';
import { AuthContext } from '../../../context/AuthContext';
import { Link} from 'react-router-dom';
import { Box, TextField, Button, Typography, Snackbar, Alert, Slide, FormHelperText, FormControl, MenuItem, Select, InputLabel} from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

const Signup = () => {

    const {name,username,user_type,setName,email,setEmail,password,setPassword,loading,
    setUsername,setUsertype,handleSignup,confirm,setConfirm,open,type,response,handleCloseNotification,handlePasswordChange,ispasswordError,
    handleConfirmChange} = useContext(AuthContext);
                
    return(
<div className='sign-up'>
        <div className='header flex align-center mt-3'>
            <p className='title'>Fan Tales</p>
        </div>

        <Box
        sx={{
        boxShadow:5,
        borderRadius: '10px',
        padding: '16px',
        width: '295px',
        height: '550px',
        margin: '2.8rem auto',
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

            <form onSubmit={handleSignup}>
                <TextField
                label="Name"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                inputProps={{ maxLength: 250 }}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                sx={{
                    fontFamily: 'Roboto, sans-serif',
                    marginTop: '10px', 
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
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
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
                label="Email"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                inputProps={{ maxLength: 250 }}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
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

                {/* alert msg  */}
                {/* <FormHelperText 
                
                sx={{ color: "red", marginLeft: "10px", fontSize: '10px', color: "transparent"}}>
                Username already taken
                </FormHelperText> */}

                <TextField
                label="password"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                inputProps={{ minLength:6,maxLength: 250 }}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                sx={{
                    fontFamily: 'Roboto, sans-serif',
                    marginTop: '20px', 
                    display: 'block',   
                    fontFamily: 'Roboto, sans-serif',
                    
                    '& .MuiOutlinedInput-root': {
                        height: "40px",

                        '& fieldset': {
                            borderColor: ispasswordError? "red": "#4caf50", 
                        },
                        
                        '&.Mui-focused fieldset': {
                            borderColor: ispasswordError? "red": "#4caf50", 
                        },
                        },

                        '&:hover fieldset': {
                        borderColor: ispasswordError ? "red" : "#4caf50", // Hover border color
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
                {/* <FormHelperText 
                
                sx={{ color: "red", marginLeft: "10px", fontSize: '10px', color: "red"}}>
                passwords dont match 
                </FormHelperText> */}

                <TextField
                label="Confirm Password"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                inputProps={{ minLength:6,maxLength: 250 }}
                value = {confirm}
                onChange={(e) => handleConfirmChange(e.target.value)}
                sx={{
                        fontFamily: 'Roboto, sans-serif',
                        marginTop: '20px', 
                        display: 'block',   
                        
                        '& .MuiOutlinedInput-root': {
                            height: "40px",
                
                            '& fieldset': {
                                borderColor: ispasswordError? "red": "#4caf50",  
                            },
                            
                            '&.Mui-focused fieldset': {
                                borderColor: ispasswordError? "red": "#4caf50", 
                            },
                        },

                        '&:hover fieldset': {
                        borderColor: ispasswordError ? "red" : "#4caf50", // Hover border color
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
                
                <FormControl fullWidth
                sx={{
                    
                    marginTop:"10px",
                    height:"40px",
                    
                    '& .MuiOutlinedInput-root': {
                        height: "40px",

                        '& fieldset': {
                            borderColor: '#000', 
                        },

                        '&:hover':{
                            borderColor: '#FC8E40',
                        },
                        
                        '&.Mui-focused fieldset': {
                            borderColor: '#000',
                        },

                    },
                    '& .MuiInputLabel-root': {
                        top: "-8px",
                        color: '#000',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#FC8E40',
                        },
            
                }}
                >
                <InputLabel id="select-label">Type</InputLabel>
                    <Select
                    required
                    value={user_type}
                    onChange={(e)=>setUsertype(e.target.value)}
                    label= "Type"
                    >
                        <MenuItem value="reader">Reader</MenuItem>
                        <MenuItem value="writer">Writer</MenuItem>
                    </Select>
                </FormControl>

                <Button
                        variant='contained'
                        color='#FC8E40'
                        type='submit'
                        disabled = {loading}
                        sx={{
                            width: '50%',
                            borderRadius: '10px',
                            margin: '25px auto 0px auto',
                            display: 'block',
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: '500',
                            fontSize: '14px',
                            background: '#FC8E40',
                            color: 'white',
                            '&:hover': {
                                color: 'black'
                            }
                        }}
                        >
                            {loading? "Signing up..." :"Sign Up"}
                </Button>
                
                <p className='link'>Already registered? <Link to="/" className='linkto'>Login!</Link></p>
                
            </form>

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
        </Box>
</div>
    )
}

export default Signup;