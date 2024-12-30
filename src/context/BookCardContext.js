import React,{useEffect,useState,createContext} from "react";

const BookCardContext = createContext()

const BookCardProvider = ({children})=>{
    
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`view/${gutenberg_id}`)
    }
    const [isBookmarked, setIsBookmarked] = useState(
        userBookmarks.some((bookmark) => bookmark.bookmarkable_id === id)
    );

    const toggleBookmark = async () => {
        try{
            const result = await fetchData(
                "http://localhost:8000/api/bookmark",
                "POST",
                {
                    bookmarkable_id: id,
                    bookmarkable_type: "App\\Models\\Book",
                },
                {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            )
            const data = await result.json();

            if (result.ok) {
                setIsBookmarked(data.status); // Update the bookmark state
            } else {
                console.error("Failed to toggle bookmark:", data.message);
            }
            
        }catch(error){
            console.error("Error fetching dataa:", error)
        }
    };
}