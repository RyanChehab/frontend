import React,{createContext} from "react";
import fetchData from "../utility/fetch";

export const GutenBookContext = createContext()

export const GutenBookProvider = ({children}) =>{

    const token = localStorage.getItem('token')

    const fetchBookContent = async (url) => {
        try {
            const response = await fetchData(
                'http://localhost:8000/api/book/fetchBookContent', 
                'POST',
                {url: url},
                {Authorization: `Bearer: ${token}`},
                
            );
            console.log(response)
        } catch (error) {
            console.error("Failed to fetch the book content:", error);
        }
    };

    return(
        <GutenBookContext.Provider value={{
            fetchBookContent
        }}>
            {children}
        </GutenBookContext.Provider>
    )
}