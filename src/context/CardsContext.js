import {Children, React,createContext,useEffect,useNavigate} from 'react';
import fetchData from '../utility/fetch';

export const CardsContext = createContext();

export const CardProvider = ({children}) => { 

useEffect(()=>{
    const getFeatured = async()=>{
        
        try{
            const response = await fetchData(
                `http://localhost:8000/api/getFeaturedBooks`,
                "POST",
                null,
            )
            console.log(response)
        }catch(error){
            console.log(error.response.error)
        }
    } 
    getFeatured()
},[])

    return(
        <CardsContext.Provider> 
            {children}
        </CardsContext.Provider>
    )
}