import React,{useContext} from "react";
import { WriterDevContext } from "../../../../context/WriterDev";
import './WriterDev.css'
const WriterDev = () =>{

        const {content,pages,currentPage,Max_Characters,handlePageChange,handlePageContentChange,handleStore,handleGetContent,setCurrentPage,setPages,
        } = useContext(WriterDevContext);

        useEffect(() => {
            handleGetContent();
        }, []);

        const handleTextareaChange = (e) => {
            handlePageContentChange(e.target.value);
        };

    return (
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
                        Save Fanfiction
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WriterDev;