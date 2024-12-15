import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
    return (
        <Box
        sx={{
            border: '3px solid #FC8E40',
            borderRadius: '10px',
            padding: '16px',
            width: '400px',
            height: '600px',
            margin: '0 auto'
        }}
        >

        <Typography
          variant="h4"
          sx={{
            fontSize:'42px',
            padding: '16px 0',
            textAlign: 'center',
             fontFamily: 'Roboto',
          }}
        >
          Login
        </Typography>

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
            marginTop: '60px', 
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
  }}
    
        />

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
            marginTop: '90px', 
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


           
        </Box>
    );
};

export default Login
;