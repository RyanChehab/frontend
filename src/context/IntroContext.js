import react,{createContext} from 'react'

const IntroContext = createContext()

const IntroProvider = ({children}) => {
    
    return(
        <IntroContext.Provider value={{
            
        }}>
            {children}
        </IntroContext.Provider>
    )
}