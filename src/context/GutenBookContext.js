import React,{createContext,useState,useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "../utility/fetch";

export const GutenBookContext = createContext()

export const GutenBookProvider = ({children}) =>{
    
    const navigate = useNavigate();
    const textareaRef = useRef(null)

    const [data,setData] = useState('');
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem('token')

    const fetchBookContent = async (url) => {
        setLoading(true)
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
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        if (data) {
            const pages = splitIntoPages(data);
            setPages(pages);
            setCurrentPage(0);
        }
    }, [data]);

    // return cursor
    useEffect(()=>{
        if (textareaRef.current) {
            textareaRef.current.scrollTop = 0;
        }
    },[currentPage])

    // Helper function to split content into pages
    const splitIntoPages = (content, maxLines = 30) => {
       
        const normalizedContent = content.replace(/\r\n|\r/g, '\n');
        const lines = normalizedContent.split('\n');
    
        // Group lines into pages
        const pages = [];
        for (let i = 0; i < lines.length; i += maxLines) {
            pages.push(lines.slice(i, i + maxLines).join('\n'));
        }
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
            textareaRef,
            loading
        }}>
            {children}
        </GutenBookContext.Provider>
    )
}