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

            // creating the repository 
            const response = await fetchData(
                "http://localhost:8000/api/createRepo",
                "POST",
                
                {title,description},

                {Authorization: `Bearer ${token}`}
            )

            // if(response.message === 'Repository created successfully!'){
            //     navigate to writerDev
            // }
            
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
            
            // third api fetch
            const updateImg = await fetchData(
                `http://localhost:8000/api/updateRepo/${repositoryId}`,
                'POST',
                {s3url},
                {Authorization: `Bearer ${token}`}
            )

            console.log(updateImg)

            setType('success')
            
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

