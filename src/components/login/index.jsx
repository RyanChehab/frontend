import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
    return (
        <Box
        sx={{
            border: '3px solid #FC8E40',
            borderRadius: '10px',
            padding: '16px',
            width: '450px',
            height: '700px',
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
        //   fullWidth
          margin="normal"
          type="email"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            margin: '8px auto', 
            display: 'block',   
            fontFamily: 'Roboto, sans-serif',
          }}
        />
           
        </Box>
    );
};

export default Login
;