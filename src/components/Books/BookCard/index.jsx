import React,{useState} from "react";
import './BookCard.css';
import fetchData from "../../../utility/fetch";

const BookCard = ({img_url, title, author, userBookmarks})=>{

    const [isBookmarked, setIsBookmarked] = useState(
        userBookmarks.some((bookmark) => bookmark.bookmarkable_id === id)
    );

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