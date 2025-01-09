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

    const handleBookmark = async (gutenberg_id)=>{
        console.log("Gutenberg ID:", gutenberg_id);
        try{
            const requestBody = {
                bookmarkable_type: "App\\Models\\Book",
                bookmarkable_id: gutenberg_id,
            };
            const result  = await fetchData(
                "http://localhost:8000/api/bookmark",
                "POST",
                requestBody,
                {Authorization: `Bearer ${token}`},
                
            )
            console.log("Bookmark added successfully:", result);
            setBookmarkedBooks((prev) => [...prev, gutenberg_id]);
        }catch(error){
            console.log(error.response.message)
        }
    }
    
    // const removeBookmark = async (gutenberg_id) => {
    //     try {
    //         const requestBody = {
    //             bookmarkable_type: "App\\Models\\Book",
    //             bookmarkable_id: gutenberg_id,
    //         };

    //         const result = await fetchData(
    //             "http://localhost:8000/api/unbookmark",
    //             "POST",
    //             { Authorization: `Bearer ${token}` },
    //             requestBody
    //         );

    //         console.log("Bookmark removed successfully:", result);

    //         // Update the local state
    //         setBookmarkedBooks((prev) => prev.filter((id) => id !== gutenberg_id));
    //     } catch (error) {
    //         console.error("Failed to remove bookmark:", error?.response?.message || error.message);
    //     }
    // };
    const isBookmarked = (gutenberg_id) => bookmarkedBooks.includes(gutenberg_id);

    return(
        <BookCardContext.Provider value={{
            handleBookmark,
            handleNavigate,
            isBookmarked
        }}>
            {children}
        </BookCardContext.Provider>
    )
}
export const useBookmark = () => useContext(BookCardContext);