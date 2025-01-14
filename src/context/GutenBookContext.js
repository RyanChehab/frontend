import React,{createContext,useState} from "react";
import fetchData from "../utility/fetch";

export const GutenBookContext = createContext()

export const GutenBookProvider = ({children}) =>{

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
            
        } catch (error) {
            console.error("Failed to fetch the book content:", error);
        }
    };

    useEffect(() => {
        if (data) {
            const standardizedData = data.replace(/\r\n|\r/g, '\n');
            setPages(splitIntoPages(standardizedData)); // Process content into pages
        }
    }, [data]);

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