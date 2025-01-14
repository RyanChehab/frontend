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
    const [title,setTitle] = useState('');
    const [loading, setLoading] = useState(false)

    // forking 
    const [forkMode, setForkMode] = useState(false);
    const [forkedContent, setForkedContent] = useState("");

    const token = localStorage.getItem('token')

    const fetchBookContent = async (url,title) => {
        setLoading(true)
        setTitle(title)
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

    // return scroll
    useEffect(()=>{
        if (textareaRef.current) {
            textareaRef.current.scrollTop = 0;
        }
    },[currentPage])

    // Helper function to split content into pages
    const splitIntoPages = (content, maxLines = 30) => {
        // Normalize line breaks
        const normalizedContent = content.replace(/\r\n|\r/g, '\n');
    
        // Replace multiple consecutive newlines with just two
        const cleanedContent = normalizedContent.replace(/\n{3,}/g, '\n\n');
    
        // Split the cleaned content into lines
        const lines = cleanedContent.split('\n');
    
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

    const activateForkMode = () => {
        setForkMode(true); // Enabling fork mode
        console.log("Fork mode activated! Click on a position in the text to fork.");
    };

    const handleFork = (e) => {
        
        const cursorPositionOnPage = e.target.selectionStart; 
        const fullContent = pages.join("\n"); // Combining all pages 

        // Calculate the starting index of the current page 
        const currentPageStart = pages
            .slice(0, currentPage)
            .reduce((acc, page) => acc + page.length + 1, 0);

        // Adjust cursor position for the entire story
        const adjustedCursorPosition = currentPageStart + cursorPositionOnPage;

        const forkedContent = fullContent.slice(0, adjustedCursorPosition);

        setForkedContent(forkedContent); // Save the sliced content
        setForkMode(false); // Exit fork mo
    };

    return(
        <GutenBookContext.Provider value={{
            fetchBookContent,
            pages,
            currentPage,
            handlePageChange,
            textareaRef,
            loading,
            title,
            handleFork,
            activateForkMode
        }}>
            {children}
        </GutenBookContext.Provider>
    )
}