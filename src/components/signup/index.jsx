import React,{useContext} from 'react';
import './signup.css';
import '../../css/utilities.css';
import { AuthContext } from '../../context/AuthContext';
import { Link} from 'react-router-dom';
import { Box, TextField, Button, Typography, Snackbar, Alert, Slide, FormHelperText, FormControl, MenuItem, Select, InputLabel} from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

const Signup = () => {

    const {name,username,register,regpass,usertype,notiType,setName,setRegister,
    setUsername,setregpass,setUsertype,setNotiType,handleSignup,confirm,setConfirm} = useContext(AuthContext);
                
    return(
<>
        <div className='header flex align-center mt-2'>
        <p className='title'>Fan Tales</p>
        </div>

        <Box
        sx={{
        boxShadow:5,
        borderRadius: '10px',
        padding: '16px',
        width: '295px',
        height: '520px',
        margin: '2.5rem auto',
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
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
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

                <TextField
                label="Email"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                inputProps={{ maxLength: 250 }}
                value={register}
                onChange={(e)=>setRegister(e.target.value)}
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
                inputProps={{ maxLength: 250 }}
                value={regpass}
                onChange={(e)=>setregpass(e.target.value)}
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
                inputProps={{ maxLength: 250 }}
                value = {confirm}
                onChange={(e)=>setConfirm(e.target.value)}
                sx={{
                    fontFamily: 'Roboto, sans-serif',
                     
                    display: 'block',   
                    
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

                {/* <FormHelperText  
                sx={{ color: "red", marginLeft: "10px", fontSize: '10px', color: "red"}}>
                passwords dont match 
                </FormHelperText> */}
                
                <FormControl fullWidth
                sx={{
                    
                    marginTop:"15px",
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
                    value={usertype}
                    onChange={(e)=>setUsertype(e.target.value)}
                    label= "Type"
                    >
                        <MenuItem value="Reader">Reader</MenuItem>
                        <MenuItem value="Writer">Writer</MenuItem>
                    </Select>
                </FormControl>

                <Button
                        variant='contained'
                        color='#FC8E40'
                        type='submit'
                        // disabled = {loading}
                        sx={{
                            width: '45%',
                            borderRadius: '10px',
                            margin: '25px auto 0px auto',
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
                            Signup
                </Button>

                <p className='link'>Don't have an account? <Link to="/" className='linkto'>Sign up now!</Link></p>
                
            </form>
        </Box>
</>
    )
}

export default Signup;