import { useState, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

    // Pagination states
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([]);
    const Max_Characters = 1000;

    // Helper function to split content into pages
    const splitIntoPages = (content) => {
        const regex = new RegExp(`.{1,${Max_Characters}}`, "g");
        return content.match(regex) || [];
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

            console.log(result);
            setResponse("Content stored successfully!");
            setType("success");
        } catch (error) {
            setResponse("Failed to store content.");
            setType("error");
            console.error(error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle fetching content from backend
    const handleGetContent = async () => {
        try {
            setLoading(true);

            const result = await fetchData(
                `http://localhost:8000/api/storeFiction/${id}`,
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

    return (
        <WriterDevContext.Provider
            value={{
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
            }}
        >
            {children}
        </WriterDevContext.Provider>
    );
};