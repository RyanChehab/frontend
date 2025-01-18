import React, {createContext,useState,useEffect} from "react";
import fetchData from "../utility/fetch";

export const ReaderBookmarkContext = createContext()

export const ReaderBookmarkProvider = ({children}) =>{

    const token = localStorage.getItem('token')

    const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

    useEffect(()=>{
        const getBookmarks = async () => {
            try{
                const result = await fetchData(
                    "http://localhost:8000/api/bookmarks/getBookmarks",
                    "POST",
                    null,
                    {Authorization: `Bearer ${token}`}
                )
                setBookmarkedBooks(result.bookmarked_ids);
            }catch(error){
                console.error(error);
            }
        }
        if (token) {
            getBookmarks();
        }
        
    },[token])

    const handleBookmark = async (id)=>{
        try{
            const requestBody = {
                bookmarkable_type: "App\\Models\\Repository",
                bookmarkable_id: id,
            };
            const result  = await fetchData(
                "http://localhost:8000/api/bookmarks/bookmark",
                "POST",
                requestBody,
                {Authorization: `Bearer ${token}`},
                
            )
            console.log(result)
            setBookmarkedBooks(result.bookmarked_ids);

        }catch(error){
            console.log(error)
        }
    }

    const removeBookmark = async (id) => {
        try {
            const requestBody = {
                bookmarkable_type: "App\\Models\\Repository",
                bookmarkable_id: id,
            };

            const result = await fetchData(
                "http://localhost:8000/api/bookmarks/unbookmark",
                "POST",
                requestBody,
                { Authorization: `Bearer ${token}` },
            );
            console.log(result)

            setBookmarkedBooks(result.bookmarked_ids);
        } catch (error) {
            console.error("Failed to remove bookmark:", error?.response?.message || error.message);
        }
    };

    const isBookmarked = (bookmarkable_id) => {
        return bookmarkedBooks.includes()
    }

    
    
    return(
        <ReaderBookmarkContext.Provider value={{
            handleBookmark,
            removeBookmark
        }}>
            {children}
        </ReaderBookmarkContext.Provider>
    )

}

