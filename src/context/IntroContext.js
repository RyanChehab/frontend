import react,{createContext, useEffect} from 'react'
import fetchData from '../utility/fetch'
export const IntroContext = createContext()

export const IntroProvider = ({children}) => {

    const token = localStorage.getItem('token')

    useEffect(()=>{
        const intro = async () => {
            try{
                const result = await fetchData(
                    'http://localhost:8000/api/bookmarks/mostBookmarked',
                    'POST',
                    null,
                    {Authorization: `bearer ${token}`}
                )
                console.log(result.repository)
            }catch(error){
                error.log(error)
            }
        }

        intro()
    },[])

    return(
        <IntroContext.Provider value={{}}>
            {children}
        </IntroContext.Provider>
    )
}