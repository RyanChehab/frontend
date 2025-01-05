import React,{useContext} from 'react';
import '../../../../css/utilities.css';
import { AdminListContext } from "../../../../context/AdminListContext";
import { Link} from 'react-router-dom';
import { Box, TextField, Button, Typography, Snackbar, Alert, Slide, FormControl, MenuItem, Select, InputLabel} from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

const AddAdmin = () => {
    
    const {password,handleAddAdmin,setName,setAdminEmail,adminEmail,handlePasswordChange,handleConfirmChange,adminLoading,ispasswordError,name,confirm,adminOpen,handleCloseNotification,type} = useContext(AdminListContext)
    return(
<div>
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
                    >Add User
            </Typography>

            <form onSubmit={handleAddAdmin}>
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
                label="Email"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                inputProps={{ maxLength: 250 }}
                value={adminEmail}
                onChange={(e)=>setAdminEmail(e.target.value)}
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
                    disabled
                    value="admin"
                    label= "Type"
                    >
                        Admin
                    </Select>
                </FormControl>

                <Button
                        variant='contained'
                        color='#FC8E40'
                        type='submit'
                        disabled = {adminLoading}
                        sx={{
                            width: '50%',
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
                            {adminLoading? "Adding..." :"Add User"}
                </Button>
                
            </form>

            <Snackbar
            open={adminOpen}
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

export default AddAdmin;