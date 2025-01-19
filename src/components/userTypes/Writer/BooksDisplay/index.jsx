import React,{useContext,useState} from "react";
import { CardsContext } from "../../../../context/CardsContext";
import { useBookmark } from "../../../../context/BookCardContext";
import { UserContext } from "../../../../context/UserContext";
import BookCard from "../BookCard";
import './BooksDisplay.css'

const DisplayCards = ()=>{
    const { data, loading} = useContext(CardsContext);
    const {show} = useContext(UserContext)
    const { isBookmarked } = useBookmark(); 
    const booksArray = Object.values(data);

     return loading ? (
        <p className="display-loading-message">Loading...</p>
      ) : booksArray.length > 0 ? (
      <>
        {show ? (
          <h2 className="display-title">Featured Books</h2>
        ) : (
          <h2 className="display-title"><span className="explore">Explore</span> our Library</h2>
        )}
        
        <div className="books-container">
          {booksArray.map((book) => (
            <BookCard
              gutenberg_id = {book.gutenberg_id}
              img_url={book.img_url}
              title={book.title}
              author={book.author}
              url_text={book.url_text}
              isBookmarked={isBookmarked(book.gutenberg_id)}
            />
          ))}
        </div>
      </>
      ) : (
        <p className="display-title">No books available</p>
      );
};

export default DisplayCards;