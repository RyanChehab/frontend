import React,{useContext} from "react";
import { useBookmark } from "../../../../context/BookCardContext";
import { GutenBookContext } from "../../../../context/GutenBookContext";
import { UserContext } from "../../../../context/UserContext";
import './BookCard.css';

const BookCard = ({ gutenberg_id, img_url, title, author, isBookmarked,url_text})=>{
    const { handleBookmark, removeBookmark} = useBookmark();
    const {fetchBookContent,loading} = useContext(GutenBookContext)
    const {show,initialized} = useContext(UserContext)

    const handleBookmarkToggle = () => {
        if (isBookmarked) {
            removeBookmark(gutenberg_id);
        } else {
            handleBookmark(gutenberg_id);
        }
    };
    
    if(!initialized){
        return (<p>loading..</p>)
    }

    return(
        <div className="cardContainer">
            <div className="book-card">

                {/* conditional render of bookmarking button  */}

                {show && (
                    <button
                    className={`bookmark-btn ${isBookmarked ? "bookmarked" : ""}`}
                    onClick={handleBookmarkToggle}
                >
                    <i className={isBookmarked ? "fas fa-bookmark" : "far fa-bookmark"}></i>
                </button>
                )}
                

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
                    onClick={()=>{fetchBookContent(url_text,title)}}
                    disabled={loading}
                    >
                        Read
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard;