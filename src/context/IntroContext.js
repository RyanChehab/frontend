import react,{createContext, useEffect, useState} from 'react'
import fetchData from '../utility/fetch'
export const IntroContext = createContext()

export const IntroProvider = ({children}) => {

    const token = localStorage.getItem('token')
    const [repository, setRepository] = useState()
    useEffect(()=>{
        const intro = async () => {
            try{
                const result = await fetchData(
                    'http://localhost:8000/api/bookmarks/mostBookmarked',
                    'POST',
                    null,
                    {Authorization: `bearer ${token}`}
                )
                setRepository(result.repository)
            }catch(error){
                error.log(error)
            }
        }

        intro()
    },[token])

    return(
        <IntroContext.Provider value={{repository}}>
            {children}
        </IntroContext.Provider>
    )
}