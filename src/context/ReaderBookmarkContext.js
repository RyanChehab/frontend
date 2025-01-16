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
}

