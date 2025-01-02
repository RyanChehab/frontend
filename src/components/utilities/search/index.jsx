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

    return (
        <>
          <div style={{ position: "relative", width: "100%", maxWidth: "453px" }}>
            <SearchBar
              placeholder="Search for stories..."
              value={searchTerm}
              onChange={handleInputChange}
              style={{ width: "100%" }}
            />
            {searchLoad && (
              <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
                Loading...
              </p>
            )}
            {searchTerm.trim()?(
            results.length > 0 ? (
              <div
                style={{
                  position: "absolute",
                  top: "48px",
                  width: "100%",
                  maxWidth: "453px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  overflow: "hidden",
                }}
              >
                {results.map((book) => (
                  <div
                    key={book.id}
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #eee",
                      cursor: "pointer",
                    }}
                    // onClick
                  >
                    <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        margin: "0 0 5px 0",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {book.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#555",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        margin: 0,
                      }}
                    >
                      Author: {book.authors.map((author) => author.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            ):(
                <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        margin: "0 0 5px 0",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >No results found</h3>
            )
        ):null}
          </div>
        </>
      );
}
export default SearchStories;
