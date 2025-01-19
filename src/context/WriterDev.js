import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetchData from "../utility/fetch";

export const WriterDevContext = createContext();

export const WriterDevProvider = ({ children }) => {
    const token = localStorage.getItem('token');
    const location = useLocation();
    const path = location.pathname;
    const id = path.split('/').pop(); // Extracting the id

    // States
    const [content, setContent] = useState('');
    const [type, setType] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [open,setOpen] = useState(true)
    // Pagination states
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([]);
    
    const Max_Characters = 3000;

    useEffect(()=>{
                setResponse(null)
                setContent("")
                setType("")
                setOpen(false)
        },[useLocation()])
    
    useEffect(()=>{
        handleGetContent(id)
    },[])

    // Helper function to split content into pages
    const splitIntoPages = (content,maxLines = 30) => {
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

    // Helper function to merge pages into a single string
    const mergePages = (pages) => pages.join("");

    // Handle storing content to backend
    const handleStore = async () => {
        try {
            setLoading(true);

            const fullContent = mergePages(pages); // Merge pages before storing
            const result = await fetchData(
                `http://localhost:8000/api/storeFiction/${id}`,
                "POST",
                { content: fullContent },
                { Authorization: `Bearer ${token}` }
            );

            setResponse("Content stored successfully!");
            setType("success");
        } catch (error) {
            setResponse("Failed to store content.");
            setType("error");
            console.error(error.response?.data || error.message);
        } finally {
            setLoading(false);
            setOpen(true)
        }
    };

    const handleCloseNotification = () => {
        setOpen(false);
      };

    // Handle fetching content from backend
    const handleGetContent = async (id) => {
        try {
            setLoading(true);

            const result = await fetchData(
                `http://localhost:8000/api/getFiction/${id}`,
                "GET",
                null,
                { Authorization: `Bearer ${token}` }
            );

            if (result.success) {
                const fullContent = result.content;
                setContent(fullContent);
                setPages(splitIntoPages(fullContent));
                setCurrentPage(0);
                
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            setContent("");
        setPages([]);
        setCurrentPage(0);
        } finally {
            setLoading(false);
        }
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

    // Automatically update the merged content when pages change
    const saveCurrentPage = () => {
        const mergedContent = mergePages(pages);
        setContent(mergedContent);
    };

    // Handle textarea input
    const handleTextareaChange = (e) => {
        const newContent = e.target.value;

        // Check if the character limit is reached
        if (newContent.length >= Max_Characters) {
            // Update the current page content
            handlePageContentChange(newContent.slice(0, Max_Characters));

            // Create a new page with the remaining text
            const remainingContent = newContent.slice(Max_Characters);
            const updatedPages = [...pages];
            updatedPages[currentPage] = newContent.slice(0, Max_Characters);
            updatedPages.splice(currentPage + 1, 0, remainingContent);

            setPages(updatedPages);
            setCurrentPage(currentPage + 1); // Move to the new page
        } else {
            // Update the current page content
            handlePageContentChange(newContent);
        }
    };


    return (
        <WriterDevContext.Provider
            value={{
                id,
                content,
                setContent,
                type,
                response,
                loading,
                currentPage,
                pages,
                Max_Characters,
                setPages,
                setCurrentPage,
                handleStore,
                handleGetContent,
                handlePageChange,
                handlePageContentChange,
                saveCurrentPage,
                handleTextareaChange,
                handleCloseNotification,
                open,
                splitIntoPages,
                setOpen
            }}
        >
            {children}
        </WriterDevContext.Provider>
    );
};