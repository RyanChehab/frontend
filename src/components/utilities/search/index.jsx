import React,{useContext} from 'react';


    
const SearchBar = styled(InputBase)(({ theme }) => ({
    minWidth: '100px',
    maxWidth: '453px',
    height: '46px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    fontSize: '16px',
}));

const SearchStories = ()=>{
    const {searchLoad,results,handleSearch,searchTerm} = useContext(NavContext)
}