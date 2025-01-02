import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BookCardContext } from "../../../../context/BookCardContext";
import './BookCard.css';

const BookCard = ({ gutenberg_id, img_url, title, author})=>{

    const {handleNavigate} = useContext(BookCardContext)
    return(
        <div className="book-card">
            <img src={img_url} alt={title} className="book_img"/>
            <div className="book-details">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
                <button className="bookmark-btn" onClick={{/*{toggleBookmark}*/}}>
                    {/* {isBookmarked ? (
                        <i className="fas fa-bookmark"></i>
                    ) : (
                        <i className="far fa-bookmark"></i>
                    )} */}
                </button>
                <button className="navigate-btn" onClick={handleNavigate}>
                    Open Book
                </button>
            </div>
        </div>
    )
}

export default BookCard;