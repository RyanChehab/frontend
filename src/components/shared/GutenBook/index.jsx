import React,{useContext} from "react";

const GutenBook = () => {

    return(

<>        
        <div className="fanfiction-container">
            {/* Header Section */}
            <div className="fanfiction-header">
            <button className="back-button">
                    Back to Website
                </button>
                <h1 className="book-title">Book</h1>
            </div>

            {/* TextArea Section */}
            <div className="fanfiction-body">
                <textarea
                    className="fanfiction-textarea"
                    value={pages[currentPage] || ""}
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
                    <button className="save-button">
                        Fork
                    </button>
                </div>
            </div>
        </div>
</>
    )
}

export default GutenBook;