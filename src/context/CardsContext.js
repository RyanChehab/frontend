import {Children, React,createContext,useEffect,useNavigate,useState} from 'react';
import fetchData from '../utility/fetch';

export const CardsContext = createContext();

export const CardProvider = ({children}) => { 
const [data, setData] = useState({})
useEffect(()=>{
    const getFeatured = async()=>{
        
        try{
            const response = await fetchData(
                `http://localhost:8000/api/getFeaturedBooks`,
                "POST",
                null,
            )
            console.log(response)
            setData(response)
        }catch(error){
            console.log(error.response.error.message)
        }
    } 
    getFeatured()
},[])

    return(
        <CardsContext.Provider value={{
            data
        }}> 
            {children}
        </CardsContext.Provider>
    )
}