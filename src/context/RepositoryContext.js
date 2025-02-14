import React,{useEffect,useState,createContext} from 'react';
import fetchData from '../utility/fetch';
import { useNavigate, useLocation } from "react-router-dom";

export const RepositoryContext = createContext();

export const RepositoryProvider = ({children})=>{
    const location = useLocation()
    const navigate = useNavigate();
    const [showForm,setShowForm] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState("");
    const [type,setType] = useState('');
    const [open,setOpen] = useState(false);
    const [repositories, setRepositories] = useState([])

    const token = localStorage.getItem('token')

    // get repositories
    useEffect(()=>{ //ADD ID 
        const repositories = async () => {
            try{
                const result = await fetchData(
                    'http://localhost:8000/api/getRepositories',
                    "POST",
                    null,
                    {Authorization: `Bearer ${token}`}
                )
                setRepositories(result.repositories)
            }catch(error){
                console.log(error.response)
            }
        }

        repositories()
    },[token,location])

    // showform
    const handleAddRepository = () => {
        setShowForm(true);
    };

    // creating repo and generating img
    const handleCreateRepository = async (e) => {
        e.preventDefault()
        try{
            setLoading(true);

            // creating the repository 
            const response = await fetchData(
                "http://localhost:8000/api/createRepo",
                "POST",
                
                {title,description},

                {Authorization: `Bearer ${token}`}
            )
            setRepositories((prev) => [...prev, response.repositories])
            // retrieve repo id 
            const repositoryId = response.data.id
            
            // prepend fixed string to the description 
            const prompt = `Create book cover (only need the cover photo). The theme is based on the following fanfiction description: ${description}`

            // second api fetch
            const imageResponse = await fetchData(
                "http://localhost:8000/api/generate-image",
                "POST",
                {prompt},
                {Authorization: `Bearer ${token}`}
            )

            // save the retrieved path
            const s3url = imageResponse.s3url;
            if(!s3url){
                console.log('failed to generate img')
            }
            // third api fetch
            const updateImg = await fetchData(
                `http://localhost:8000/api/updateRepo/${repositoryId}`,
                'POST',
                {s3url},
                {Authorization: `Bearer ${token}`}
            )

            if(response.message === 'Repository created successfully!'){
                navigate(`WriterDev/${repositoryId}`)
                setType('success')
                setResponse(response.message)
                setShowForm(false)
            }

            
        }catch(error){
            setResponse(error.response.data.message)
            setType('error')
        }finally{
            setLoading(false)
        }
    }

    // deleting repo 
    const handleDeleteRepo = async (id) => {
        if (!id) {
            console.error("Invalid repository ID:", id);
            return;
        }
        try{
            const response = await fetchData(
                `http://localhost:8000/api/deleteRepo/${id}`,
                'POST',
                null,
                {Authorization: `Bearer ${token}`}
            )

            // updating the Repositories state 
            setRepositories((prev) => prev.filter((repo) => repo.id !== id));
        }catch(error){
            console.log(error)
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
            open,
            repositories,
            handleDeleteRepo,
        }}>
            {children}
        </RepositoryContext.Provider>
    )
}

