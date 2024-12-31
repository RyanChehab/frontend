import {Children, React,createContext,useEffect,useState} from 'react';
import fetchData from '../utility/fetch';

export const CardsContext = createContext();

export const CardProvider = ({children}) => { 
const [data, setData] = useState([])
const [loading, setLoading] = useState(true);
const [catLoading, setCatLoading] = useState(true);
const [bookmarks,setBookmarks] = useState([]);
const [category,setCategory] = useState([]);

useEffect(() => {
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
        } finally {
            setLoading(false); // Set loading to false after data is fetched
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
        } finally{
            setCatLoading(false)
        }
    };

    getBookmarks();
    getFeatured();
    getByCategory();
}, []);

    return(
        <CardsContext.Provider value={{
            data,
            loading,
            bookmarks,
            category,
            catLoading
        }}> 
            {children}
        </CardsContext.Provider>
    )
}