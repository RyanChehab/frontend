import React,{useEffect,useState,createContext} from 'react';
import fetchData from '../utility/fetch';
export const RepositoryContext = createContext();

export const RepositoryProvider = ({children})=>{
    const [showForm,setShowForm] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState("");
    const [type,setType] = useState('');
    const [open,setOpen] = useState(false)

    const token = localStorage.getItem('token')
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
                    Authorization: `Bearer ${token}`
                }
            )
            setType('success')
            setResponse(response.message)
            setShowForm(false)
        }catch(error){
            setResponse(error.response.data.message)
            setType('error')
        }finally{
            setLoading(false)
            setOpen(true)
        }
    }
    const handleCloseNotification = () => {
        setOpen(false);
      };
    
    return(
        <RepositoryContext.Provider value={{
            handleAddRepository,
            showForm,
            setShowForm,
            loading,
            handleCreateRepository,
            handleCloseNotification,
            setTitle,
            setDescription,
            response,
            type,
            open
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}

