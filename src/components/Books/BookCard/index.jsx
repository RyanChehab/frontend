import React from "react";
import './BookCard.css';

const BookCard = ({img_url, title, author})=>{
    return(
        <div className="book-card">
            <img src={img_url} alt={title} className="book_img"/>
            <div className="book-details">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
            </div>
        </div>
    )
}

export default BookCard;