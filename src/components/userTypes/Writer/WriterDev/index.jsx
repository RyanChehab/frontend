import React,{useContext, useEffect} from "react";
import { WriterDevContext } from "../../../../context/WriterDev";
import './WriterDev.css'
import { Snackbar,Alert } from "@mui/material";
import { SlideTransition } from "../../../Auth/login";
import {useLocation } from "react-router-dom";

const WriterDev = () =>{
        const location = useLocation()

        const {id,content,pages,currentPage,Max_Characters,handlePageChange,handlePageContentChange,handleStore,handleGetContent,setCurrentPage,setPages,handleTextareaChange,type,response,handleCloseNotification,open,setContent,splitIntoPages
        } = useContext(WriterDevContext);


    return (
<>        
        <div className="fanfiction-container">
            {/* Header Section */}
            <div className="fanfiction-header">
                <button className="back-button" onClick={() => window.history.back()}>
                    Back to Website
                </button>
                <h1 className="book-title">Book Title</h1>
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