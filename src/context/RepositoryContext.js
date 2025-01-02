import React,{useEffect,useState,createContext} from 'react';

export const RepositoryContext = createContext();

export const RepositoryProvider = ({children})=>{
    
    const handleAddRepository = () => {
        console.log("working!");
    };


    return(
        <RepositoryContext.Provider value={{
            handleAddRepository,
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}

