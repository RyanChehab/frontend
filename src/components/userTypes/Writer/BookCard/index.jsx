import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useBookmark } from "../../../../context/BookCardContext";
import './BookCard.css';

const BookCard = ({ gutenberg_id, img_url, title, author})=>{
    const { handleBookmark, removeBookmark, isBookmarked } = useBookmark();
    
    const handleBookmarkToggle = () => {
        if (isBookmarked(gutenberg_id)) {
            // removeBookmark(gutenberg_id);
            console.log('ok remove')
        } else {
            handleBookmark(gutenberg_id);
        }
    };

    return(
        <div className="book-card">
            
            <button
                className={`bookmark-btn ${isBookmarked(gutenberg_id) ? "bookmarked" : ""}`}
                onClick={handleBookmarkToggle}
            >
                {/* Dynamic Bookmark Icon */}
                <i className={isBookmarked(gutenberg_id) ? "fas fa-bookmark" : "far fa-bookmark"}></i>
            </button>

            <div className="book-image-container">
                <img src={img_url} alt={title} className="book-image" />
            </div>

            <div className="book-details">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">By {author}</p>
            </div>

            <div className="book-footer">
                <button className="navigate-btn">
                    Open
                </button>
            </div>
        </div>
    )
}

export default BookCard;