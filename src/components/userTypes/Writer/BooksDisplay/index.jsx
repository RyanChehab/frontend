import React,{useContext,useState} from "react";
import { CardsContext } from "../../../../context/CardsContext";
import { useBookmark } from "../../../../context/BookCardContext";
import BookCard from "../BookCard";
import './BooksDisplay.css'

const DisplayCards = ()=>{
    const { data, loading} = useContext(CardsContext);
    const { isBookmarked, bookmarkedBooks } = useBookmark(); 
    console.log("Bookmarked IDs:", bookmarkedBooks);
    console.log(data)
    const booksArray = Object.values(data);

     return loading ? (
        <p className="display-loading-message">Loading...</p>
      ) : booksArray.length > 0 ? (
      <>
        <h2 className="display-title">Fetured Books</h2>
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