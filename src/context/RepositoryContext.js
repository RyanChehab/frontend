import React,{useEffect,useState,createContext} from 'react';
import fetchData from '../utility/fetch';
export const RepositoryContext = createContext();

export const RepositoryProvider = ({children})=>{
    const [showForm,setShowForm] = useState(false);
    const [loading,setLoading] = useState(false);

    // showform
    const handleAddRepository = () => {
        setShowForm(true);
    };

    const handleCreateRepository = () => {
        try{

        }catch(error){

        }finally{
            
        }
    }
    
    return(
        <RepositoryContext.Provider value={{
            handleAddRepository,
            showForm,
            setShowForm,
            loading
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}

