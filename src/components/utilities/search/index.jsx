import React,{useContext} from 'react';
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
    
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
    const {searchLoad,results,handleSearch,searchTerm,setSearchTerm} = useContext(NavContext)

    return (
        <div>
          <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px" }}>
            <SearchBar
              placeholder="Search for stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                border: "none",
                background: "#007BFF",
                color: "#fff",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Search
            </button>
          </form>
          {searchLoad && <p>Loading...</p>}
          <div className="search-results" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}></div></div>
    )
    };
