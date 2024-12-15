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
          variant="h3"
          sx={{
            padding: '16px 0',
            textAlign: 'center',
             fontFamily: 'Roboto, sans-serif',
          }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            marginTop: '60px', 
            display: 'block',   
            fontFamily: 'Roboto, sans-serif',
            
            '& .MuiOutlinedInput-root': {

                '&:hover fieldset': {
                borderColor: '#000000',
                },

                '&.Mui-focused fieldset': {
                borderColor: '#ff5722',
                },

            }
          }}
        />
           
        </Box>
    );
};

export default Login
;