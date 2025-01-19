import React,{useContext} from "react";
import { GutenBookContext } from "../../../context/GutenBookContext";
import { Snackbar,Alert,Button } from "@mui/material";
import { SlideTransition } from "../../Auth/login";
import { ModalOverlay } from "../../userTypes/Writer/Repositories";
import { FormContainer } from "../../userTypes/Writer/Repositories";
import { CustomeInput } from "../../userTypes/Writer/Repositories";
import { UserContext } from "../../../context/UserContext";

const GutenBook = () => {
    const {pages,currentPage,handlePageChange,textareaRef,title,handleFork,activateForkMode,forkMode,showForm,setShowForm,open,handleCreateRepository,response,handleCloseNotification,type,setRepoTitle,setDescription,repoLoading} = useContext(GutenBookContext)
    
    const {show} = useContext(UserContext)
    
    return(

<>

        <div className="fanfiction-container">
            
            {/* Header Section */}
            <div className="fanfiction-header">

                <button className="back-button" onClick={()=>{window.history.back()}}>
                    Exit
                </button>
                <h1 className="book-title">{title}</h1>
                {show&& (
                    <button className="back-button" onClick={()=>{activateForkMode()
                    }}>
                        {forkMode? "Forking..": "Fork"}
                    </button>
                )}
                
            </div>

            {/* TextArea Section */}
            <div className="fanfiction-body">
                <textarea
                    className="fanfiction-textarea"
                    value={pages[currentPage] || ""}
                    ref={textareaRef}
                    onClick={(e)=> handleFork(e)}
                    style={{ cursor: forkMode ? "crosshair" : "text" }}
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
                    Page {currentPage + 1} of {pages.length}
                    </span>

                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange("next")}
                        disabled={currentPage === pages.length - 1}
                    >
                        Next
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

            {/* form title */}
            <h5 className='create'>Create Repository</h5>

            <form onSubmit={handleCreateRepository}>
              <CustomeInput type="text"
              required
              placeholder='Title'
              fullWidth
              onChange={(e)=>setRepoTitle(e.target.value)}
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
              disabled = {repoLoading}
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
        >{repoLoading? "Creating..." :"Create "}</Button>
            </form>
          </FormContainer>
        </ModalOverlay>
      )}

</>        
    )
}

export default GutenBook;