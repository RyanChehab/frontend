import React,{useEffect,createContext} from "react";
import fetchData from "../utility/fetch";

export const ReaderRepositoryContext = createContext()

export const ReaderRepoProvider = ({children}) => {


    return(
        <ReaderRepositoryContext.Provider value={{}}>
            {children}
        </ReaderRepositoryContext.Provider>
    )
}