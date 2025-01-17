import React,{useEffect,useState,createContext,useContext} from "react";
import fetchData from "../utility/fetch";
import { useNavigate } from "react-router-dom";

export const BookCardContext = createContext()

export const BookCardProvider = ({children})=>{

    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    
    const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

    const handleNavigate = (gutenberg_id) => {
        if (!gutenberg_id) {
            console.error("gutenberg_id is not defined.");
            return;
        }
        navigate(`view/${gutenberg_id}`);
    };

    useEffect(()=>{
        const getBookmarks = async () => {
            try{
                const result = await fetchData(
                    "http://localhost:8000/api/bookmarks/getBookmarks",
                    "POST",
                    null,
                    {Authorization: `Bearer ${token}`}
                )
                setBookmarkedBooks(result.bookmarked_books);
            }catch(error){
                console.error(error);
            }
        }
        if (token) {
            getBookmarks();
        }
        
    },[token])

    const handleBookmark = async (gutenberg_id)=>{
        try{
            const requestBody = {
                bookmarkable_type: "App\\Models\\Book",
                bookmarkable_id: gutenberg_id,
            };
            const result  = await fetchData(
                "http://localhost:8000/api/bookmarks/bookmark",
                "POST",
                requestBody,
                {Authorization: `Bearer ${token}`},
                
            )
            setBookmarkedBooks((prev) => [...prev, gutenberg_id]);
        }catch(error){
            console.log(error)
        }
    }
    
    const removeBookmark = async (gutenberg_id) => {
        try {
            const requestBody = {
                bookmarkable_type: "App\\Models\\Book",
                bookmarkable_id: gutenberg_id,
            };

            const result = await fetchData(
                "http://localhost:8000/api/bookmarks/unbookmark",
                "POST",
                requestBody,
                { Authorization: `Bearer ${token}` },
            );
            // Update the local state
            setBookmarkedBooks((prev) => prev.filter((id) => id !== gutenberg_id));
        } catch (error) {
            console.error("Failed to remove bookmark:", error?.response?.message || error.message);
        }
    };

    const isBookmarked = (gutenberg_id) => {
        return bookmarkedBooks.includes(gutenberg_id);
    };

    

    return(
        <BookCardContext.Provider value={{
            handleBookmark,
            handleNavigate,
            isBookmarked,
            removeBookmark,
            bookmarkedBooks
        }}>
            {children}
        </BookCardContext.Provider>
    )
}
export const useBookmark = () => useContext(BookCardContext);