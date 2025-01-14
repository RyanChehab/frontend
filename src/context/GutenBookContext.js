import React,{createContext,useState} from "react";
import fetchData from "../utility/fetch";

export const GutenBookContext = createContext()

export const GutenBookProvider = ({children}) =>{

    const [data,setData] = useState('');

    const token = localStorage.getItem('token')

    const fetchBookContent = async (url) => {
        try {
            const response = await fetchData(
                'http://localhost:8000/api/book/fetchBookContent', 
                'POST',
                {url: url},
                {Authorization: `Bearer: ${token}`},
            );
            setData(response.content)
        } catch (error) {
            console.error("Failed to fetch the book content:", error);
        }
    };

    const standarized = data.replace(/\r\n|\r/g, '\n');

    // Helper function to split content into pages
    const splitIntoPages = (standarized) => {
        const regex = new RegExp(`.{1,${Max_Characters}}`, "g");
        return content.match(regex) || [];
    };

    // Handle page changes (next/previous)
    const handlePageChange = (direction) => {
        if (direction === "next" && currentPage < pages.length - 1) {
            setCurrentPage((prev) => prev + 1);
        } else if (direction === "prev" && currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    // Handle updates to current page content
    const handlePageContentChange = (newContent) => {
        const updatedPages = [...pages];
        updatedPages[currentPage] = newContent;
        setPages(updatedPages);
    };

    return(
        <GutenBookContext.Provider value={{
            fetchBookContent,
            
        }}>
            {children}
        </GutenBookContext.Provider>
    )
}