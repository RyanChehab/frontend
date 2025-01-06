import React,{useContext} from "react";
import { WriterDevContext } from "../../../../context/WriterDev";
import './WriterDev.css'
const WriterDev = () =>{
    const{fanfiction,setFanfiction,currentPage,setCurrentPage,totalPages,handleBack,handlePageChange} = useContext(WriterDevContext)

    return (
        <div className="fanfiction-container">
            {/* Header Section */}
            <div className="fanfiction-header">
                <button className="back-button" onClick={handleBack}>
                    Back to Website
                </button>
                <h1 className="book-title">Book Title</h1>
            </div>

            {/* TextArea Section */}
            <div className="fanfiction-body">
                <textarea
                    className="fanfiction-textarea"
                    value={fanfiction}
                    onChange={(e) => setFanfiction(e.target.value)}
                    placeholder="Start writing your fanfiction here..."
                ></textarea>

                {/* Pagination Section */}
                <div className="fanfiction-pagination">
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange("prev")}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="pagination-text">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange("next")}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WriterDev;