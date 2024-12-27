import {Children, React,createContext,useEffect,useNavigate} from 'react';
import fetchData from '../utility/fetch';

export const CardsContext = createContext();

export const CardProvider = ({children}) => { 

useEffect(()=>{
    const getFeatured = async()=>{
        const base_url = process.env.BASE_URL;
        try{
            const response = await fetchData(
                `${base_url}/getFeaturedBooks`,
                "POST",
                null,
            )
            console.log(response)
        }catch(error){
            console.log(error.response.error.message)
        }
    } 

    getFeatured()
},[])

    return(
        <CardsContext.Provider value={{
            getFeatured
        }}> 
            {children}
        </CardsContext.Provider>
    )
}