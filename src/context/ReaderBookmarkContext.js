import React, {createContext,useState} from "react";
import fetchData from "../utility/fetch";

export const ReaderBookmarkContext = createContext()

export const ReaderBookmarkProvider = () =>{

    const token = localStorage.getItem('token')
    const [bookmarkedRepo,setBookmarkedRepo] = useState([])

    useEffect(()=>{
        const getBookmarks = async () => {
            try{
                const result = await fetchData(
                    "http://localhost:8000/api/bookmarks/getBookmarks",
                    "POST",
                    null,
                    {Authorization: `Bearer ${token}`}
                )
                setBookmarkedRepo(result.bookmarked_ids);
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
            setBookmarkedRepo((prev) => [...prev, gutenberg_id]);
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
            // Update state
            setBookmarkedRepo((prev) => prev.filter((id) => id !== gutenberg_id));
        } catch (error) {
            console.error("Failed to remove bookmark:", error?.response?.message || error.message);
        }
    };
  

}

