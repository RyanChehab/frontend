import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const useTokenValidation = (token) => {
    const navigate = useNavigate()
}

useEffect(()=>{
    if(!token) {
        navigate('/')
        return
    }
})