import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const useTokenValidation = (token) => {
    const  navigate = useNavigate()


useEffect(()=>{
    if(!token) {
        navigate('/')
        return
    }

    try{
        const decodedToken = jwt(token);
        const currentTime = Math.floor(Date.now()/1000)

        if(decodedToken.exp < currentTime){
            alert('Your token has expired. Please Log in again')
            navigate('/')
        
        }else{
    
        const timeUntileExpiry = (decodedToken.exp - currentTime) * 1000;
        const timer = setTimeout(() => {
            alert('Your token has expired. Please Log in again')
            navigate('/')
        },timeUntileExpiry)
        }
    }catch(error){
        console.error('Invalid token: ', error)
        navigate('/')
    }

},[token, navigate]);

}
export default useTokenValidation;