import React,{useContext} from 'react';
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { NavContext } from '../../../context/NavContext';

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
    const {searchLoad,results,handleInputChange,searchTerm} = useContext(NavContext)

    return(
    <>
        <SearchBar
        placeholder="Search for stories..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {loading && <p>Loading...</p>}
      <div
        className="search-results"
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      ></div>
    </>
    )
}
export default SearchStories;
