import React,{useEffect,createContext, useState} from "react";
import fetchData from "../utility/fetch";

export const ReaderRepositoryContext = createContext()

export const ReaderRepoProvider = ({children}) => {

    const token = localStorage.getItem('token')
    const [repositories,setRepos] = useState([]);
    const [loading,setLoading] = useState(true)

    // fetching all repos
    useEffect(()=>{
        const repos = async () => {
            console.log('hellooooo')
            try{
                const result = await fetchData(
                    'http://localhost:8000/api/getReaderRepositories',
                    'POST',
                    null,
                    {Authorization: `Bearer ${token}`}
                )
                console.log("reader repo: ", result)
                setRepos(result.repositories)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        repos()
    },[])
    return(
        <ReaderRepositoryContext.Provider value={{
            repositories,
            loading
        }}>
            {children}
        </ReaderRepositoryContext.Provider>
    )
}