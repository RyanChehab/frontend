import React,{useContext, useEffect} from "react";
import { WriterDevContext } from "../../../../context/WriterDev";
import './WriterDev.css'
import {useLocation,useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { SlideTransition } from "../../../Auth/login";
import Chatbot from "../../../utilities/ChatBot/ChatBot";

const WriterDev = () =>{
        const location = useLocation()
        const navigate = useNavigate()
        const {forkedContent, RepositoryTitle} = location.state || {}
        const {id,pages,setPages,currentPage,Max_Characters,handlePageChange,handleStore,handleTextareaChange,response,type,handleCloseNotification,open} = useContext(WriterDevContext);

        useEffect(() => {
            if(forkedContent){
                setPages([forkedContent])
            }
        }, [forkedContent,setPages]
        
        )


    return (
<>        
        <div className="fanfiction-container">
            {/* Header Section */}
            <div className="fanfiction-header">
            <button className="back-button" onClick={async () =>{
                    handleStore(id)
                    navigate('/repositories')}
                }>
                    Exit
                </button>
                <h1 className="book-title">{RepositoryTitle}</h1>
                <button className="back-button" onClick={handleStore}>
                        Save
                </button>
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
<Chatbot/>
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
</>
    );
}

export default WriterDev;