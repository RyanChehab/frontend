import React,{useEffect,createContext} from "react";
import fetchData from "../utility/fetch";

export const ReaderRepositoryContext = createContext()

export const ReaderRepoProvider = ({children}) => {

    // fetching all repos
    useEffect(()=>{
        const repos = async () => {
            try{
                const result = await fetchData(
                    'http://localhost:8000/api/getReaderRepositories',
                    'POST',
                    null,
                    {Authorization: `Bearer ${token}`}
                )
                console.log("reader repo: ", result)
            }
        }
    },[])
    return(
        <ReaderRepositoryContext.Provider value={{}}>
            {children}
        </ReaderRepositoryContext.Provider>
    )
}