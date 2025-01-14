import React,{useContext, useEffect} from "react";
import { WriterDevContext } from "../../../../context/WriterDev";
import './WriterDev.css'
import { Snackbar,Alert } from "@mui/material";
import { SlideTransition } from "../../../Auth/login";
import {useLocation } from "react-router-dom";
import { ModalOverlay } from "../Repositories";
import { FormContainer } from "../Repositories";

const WriterDev = () =>{
        const location = useLocation()

        const {id,content,pages,currentPage,Max_Characters,handlePageChange,handlePageContentChange,handleStore,handleGetContent,setCurrentPage,setPages,handleTextareaChange,type,response,handleCloseNotification,open,setContent,splitIntoPages
        } = useContext(WriterDevContext);


    return (
<>        
        <div className="fanfiction-container">
            {/* Header Section */}
            <div className="fanfiction-header">
            <button className="back-button" onClick={async () =>{
                    handleStore(id)
                    window.history.back()}
                }>
                    Back to Website
                </button>
                <h1 className="book-title">{localStorage.getItem(`repo_${id}`)}</h1>
            </div>

            {/* TextArea Section */}
            <div className="fanfiction-body">
                <textarea
                    className="fanfiction-textarea"
                    value={pages[currentPage] || ""}
                    onChange={handleTextareaChange}
                    placeholder={`Page ${currentPage + 1}. Maximum ${Max_Characters} characters.`}
                ></textarea>

                {/* Pagination Section */}
                <div className="fanfiction-pagination">
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange("prev")}
                        disabled={currentPage === 0}
                    >
                        Previous
                    </button>
                    
                    <span className="pagination-text">
                    Page {currentPage + 1} of {pages.length || 1}
                    </span>

                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange("next")}
                        disabled={currentPage === pages.length - 1 || pages.length === 0}
                    >
                        Next
                    </button>
                </div>

                {/* Save Button */}
                <div className="fanfiction-save">
                    <button className="save-button" onClick={handleStore}>
                        Save
                    </button>
                </div>
            </div>
        </div>

{/* Notification */}
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert
            severity={type}
            sx = {{width: "100%"}}
            >
                {response}
            </Alert>
        </Snackbar>

{/* create repo form */}
      {showForm &&(
        <ModalOverlay>
          <FormContainer>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>

            <form onSubmit={handleCreateRepository}>
              <CustomeInput type="text"
              required
              placeholder='Title'
              fullWidth
              onChange={(e)=>setTitle(e.target.value)}
              />
              <CustomeInput type="text"
              required
              placeholder='The Fanfiction derrived from book...talks about..'
              multiline
              rows={4}
              fullWidth
              onChange={(e)=>setDescription(e.target.value)}
              />
              <Button
              variant='contained'
              color='#FC8E40'
              type='submit'
              disabled = {loading}
              sx={{
                  width: '80%',
                  borderRadius: '10px',
                  margin: '60px auto 0px auto',
                  display: 'block',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: '500',
                  fontSize: '14px',
                  border: 'black 2px solid',
                  '&:hover': {
                      border:'solid 2px #FC8E40',
            }
        }}
        >{loading? "Creating..." :"Create Repository"}</Button>
            </form>
          </FormContainer>
        </ModalOverlay>
      )}

</>
    );
}

export default WriterDev;