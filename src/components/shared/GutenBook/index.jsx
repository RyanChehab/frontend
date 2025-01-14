import React,{useContext} from "react";
import { GutenBookContext } from "../../../context/GutenBookContext";

const GutenBook = () => {
    const {pages,currentPage,handlePageChange,textareaRef,title,handleFork,activateForkMode,forkMode} = useContext(GutenBookContext)
    
    return(

<>

        <div className="fanfiction-container">
            
            {/* Header Section */}
            <div className="fanfiction-header">
            <button className="back-button" onClick={()=>{window.history.back()}}>
                    Back to Website
                </button>
                <h1 className="book-title">{title}</h1>
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

                {/* Fork Button */}
                <div className="fanfiction-save">
                    <button className="save-button" onClick={()=>{activateForkMode()
                    }}>
                        {forkMode? "Forking..": "test"}
                    </button>
                </div>
            </div>
        </div>
</>        
    )
}

export default GutenBook;