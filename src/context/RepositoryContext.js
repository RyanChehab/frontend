import React,{useEffect,useState,createContext} from 'react';
import fetchData from '../utility/fetch';
export const RepositoryContext = createContext();

export const RepositoryProvider = ({children})=>{
    const [showForm,setShowForm] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [loading,setLoading] = useState();
    const [response,setResponse] = useState("");

    // showform
    const handleAddRepository = () => {
        setShowForm(true);
    };

    const handleCreateRepository = async (e) => {
        e.preventDefault()
        try{
            setLoading(true);
            const response = await fetchData(
                "http://localhost:8000/api/Repository/createRepo",
                "POST",
                
                {title,description},

                {
                    Authorization: localStorage.getItem('token')
                }
            )
            console.log(response.message)
        }catch(error){
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
    
    return(
        <RepositoryContext.Provider value={{
            handleAddRepository,
            showForm,
            setShowForm,
            loading,
            handleCreateRepository,
            setTitle,
            setDescription
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}

