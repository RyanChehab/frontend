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
                <button className="back-button">
                    Back to Website
                </button>
                <h1 className="book-title">Book Title</h1>
            </div>

            {/* TextArea Section */}
            <div className="fanfiction-body">
                <textarea
                    className="fanfiction-textarea"
                    placeholder="Start writing your fanfiction here..."
                ></textarea>

                {/* Pagination Section */}
                <div className="fanfiction-pagination">
                    <button
                        className="pagination-button"
                        
                    >
                        Previous
                    </button>
                    <span className="pagination-text">
                        Page 1 of 100
                    </span>
                    <button
                        className="pagination-button"
                        
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WriterDev;