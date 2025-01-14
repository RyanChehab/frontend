import React,{createContext,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "../utility/fetch";

export const GutenBookContext = createContext()

export const GutenBookProvider = ({children}) =>{
    
    const navigate = useNavigate();
    
    const [data,setData] = useState('');
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const token = localStorage.getItem('token')
    const Max_Characters = 2000;

    const fetchBookContent = async (url) => {
        try {
            const response = await fetchData(
                'http://localhost:8000/api/book/fetchBookContent', 
                'POST',
                {url: url},
                {Authorization: `Bearer: ${token}`},
            );
            setData(response.content)
            navigate('Book')
        } catch (error) {
            console.error("Failed to fetch the book content:", error);
        }
    };

    useEffect(() => {
        if (data) {
            const pages = splitIntoPages(data);
            setPages(pages);
            setCurrentPage(0);
        }
    }, [data]);

    // Helper function to split content into pages
    const splitIntoPages = (content, maxLines = 30) => {
        // Normalize the line breaks
        const normalizedContent = content.replace(/\r\n|\r/g, '\n');
    
        // Split the content into an array of lines
        const lines = normalizedContent.split('\n');
    
        // Group lines into pages
        const pages = [];
        for (let i = 0; i < lines.length; i += maxLines) {
            pages.push(lines.slice(i, i + maxLines).join('\n'));
        }
    
        console.log("Pages by Line:", pages); // Debugging log
        return pages;
    };

    // Handle page changes (next/previous)
    const handlePageChange = (direction) => {
        if (direction === "next" && currentPage < pages.length - 1) {
            setCurrentPage((prev) => prev + 1);
        } else if (direction === "prev" && currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return(
        <GutenBookContext.Provider value={{
            fetchBookContent,
            pages,
            currentPage,
            handlePageChange,
        }}>
            {children}
        </GutenBookContext.Provider>
    )
}