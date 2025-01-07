import {React,createContext,useEffect,useState} from 'react';
import fetchData from '../utility/fetch';
import { useLocation } from "react-router-dom";
export const CardsContext = createContext();

export const CardProvider = ({children}) => { 
const [data, setData] = useState([])
const [loading, setLoading] = useState(false);
const [bookmarks,setBookmarks] = useState([]);
const [category,setCategory] = useState([]);

    const getFeatured = async () => {
        try {
            const result = await fetchData(
                "http://localhost:8000/api/book/getFeaturedBooks",
                "POST",
                null,
            );
        
            setData(result);
            console.log(result)
        } catch (error) {
            console.error("Error fetching dataa:", error);
        } 
    };

    const getBookmarks = async () => {
        try {
            const response = await fetchData(
                "http://localhost:8000/api/book/getBookmarks",
                "POST",
                {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            );
            console.log(response)
            setBookmarks(response)
        } catch (error) {
            console.error("Error fetching dataa:", error);
        }
    };

    const getByCategory = async () => {
        try {
            const response = await fetchData(
                "http://localhost:8000/api/book/BookCategories",
                "POST",
            );
            console.log(response)
            setCategory(response)
        } catch (error) {
            console.error("Error fetching dataa:", error);
        } 
    };

    const location = useLocation()
    useEffect(() => {
        const fetchAllData = async ()=>{
            setLoading(true)
            try{
                await Promise.all([getFeatured(), getBookmarks(), getByCategory()])

            }catch(error){
                console.error("Error fetching all data:", error);
            }finally{
                setLoading(false)
                document.body.style.overflow = "hidden"; 
                void document.body.offsetHeight; 
                document.body.style.overflow = "auto";
            }
        }

        fetchAllData()
    },[location.pathname])

    return(
        <CardsContext.Provider value={{
            data,
            loading,
            bookmarks,
            category,
        }}> 
            {children}
        </CardsContext.Provider>
    )
}