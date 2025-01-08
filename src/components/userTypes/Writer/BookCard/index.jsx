import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BookCardContext } from "../../../../context/BookCardContext";
import './BookCard.css';

const BookCard = ({ gutenberg_id, img_url, title, author})=>{

    return(
        <div className="book-card">
            
            <button className="bookmark-btn" >
                <i className="far fa-bookmark"></i>
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