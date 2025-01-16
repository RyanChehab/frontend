import React,{useContext} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { WriterDevContext } from "../../../../context/WriterDev";

const FanFiction = () => {
    
    const navigate = useNavigate()
    const location = useLocation()
    const {RepoTitle} = location.state || {}
    const {pages,currentPage,handlePageChange} = useContext(WriterDevContext);

    return (
        <>        
                <div className="fanfiction-container">
                    {/* Header Section */}
                    <div className="fanfiction-header">
                <button className="back-button" onClick={async () =>{
                        navigate('/reader')}
                        }>
                            Back to Website
                        </button>
                        <h1 className="book-title">{RepoTitle}</h1>
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
        
                    </div>
                </div>
        </>
            );
}

export default FanFiction;