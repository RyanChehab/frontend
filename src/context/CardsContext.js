import {Children, React,createContext,useEffect,useNavigate,useState} from 'react';
import fetchData from '../utility/fetch';

export const CardsContext = createContext();

export const CardProvider = ({children}) => { 
const [data, setData] = useState([])
const [loading, setLoading] = useState(true);

useEffect(() => {
    const getFeatured = async () => {
        try {
            const result = await fetchData(
                "http://localhost:8000/api/getFeaturedBooks",
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
                "http://localhost:8000/api/getBookmarks",
                "POST",
                {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            );
            console.log(response)
        } catch (error) {
            console.error("Error fetching dataa:", error);
        }
    };
    getBookmarks();
    getFeatured();
}, []);

    return(
        <CardsContext.Provider value={{
            data,loading,test
        }}> 
            {children}
        </CardsContext.Provider>
    )
}