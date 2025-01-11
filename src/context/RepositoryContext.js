import React,{useEffect,useState,createContext} from 'react';
import fetchData from '../utility/fetch';
import { useNavigate } from "react-router-dom";

export const RepositoryContext = createContext();

export const RepositoryProvider = ({children})=>{

    const navigate = useNavigate();
    const [showForm,setShowForm] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState("");
    const [type,setType] = useState('');
    const [open,setOpen] = useState(false);
    const [respositories, setRepositories] = useState([])

    const token = localStorage.getItem('token')
    
    // get repositories
    useEffect(()=>{

    },[])

    // showform
    const handleAddRepository = () => {
        setShowForm(true);
    };

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

            console.log(updateImg)

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

