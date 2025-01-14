import React,{createContext} from "react";
import fetchData from "../utility/fetch";

export const BookContext = createContext()

export const BookProvider = ({children}) =>{

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
        <BookContext.Provider value={{
            fetchBookContent
        }}>
            {children}
        </BookContext.Provider>
    )
}