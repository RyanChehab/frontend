import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useBookmark } from "../../../../context/BookCardContext";
import { GutenBookContext } from "../../../../context/GutenBookContext";
import './BookCard.css';

const BookCard = ({ gutenberg_id, img_url, title, author, isBookmarked,url_text})=>{
    const { handleBookmark, removeBookmark} = useBookmark();
    const {fetchBookContent} = useContext(GutenBookContext
        
    )
    const handleBookmarkToggle = () => {
        if (isBookmarked) {
            removeBookmark(gutenberg_id);
        } else {
            handleBookmark(gutenberg_id);
        }
    };

    return(
        <div className="book-card">
            
            <button
                className={`bookmark-btn ${isBookmarked ? "bookmarked" : ""}`}
                onClick={handleBookmarkToggle}
            >
                <i className={isBookmarked ? "fas fa-bookmark" : "far fa-bookmark"}></i>
            </button>

            <div className="book-image-container">
                <img src={img_url} alt={title} className="book-image" />
            </div>

            <div className="book-details">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">By {author}</p>
            </div>

            <div className="book-footer">
            <button
    className="navigate-btn"
    onClick={()=>{console.log(url_text)}}
>
                    Open
                </button>
            </div>
        </div>
    )
}

export default BookCard;