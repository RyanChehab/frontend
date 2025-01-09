import React,{useContext,useState} from "react";
import { CardsContext } from "../../../../context/CardsContext";
import { useBookmark } from "../../../../context/BookCardContext";
import BookCard from "../BookCard";
import './BooksDisplay.css'

const DisplayCards = ()=>{
    const { data} = useContext(CardsContext);
    const { isBookmarked, bookmarkedBooks } = useBookmark(); 
    console.log("Bookmarked IDs:", bookmarkedBooks);
    console.log(data)
    const booksArray = Object.values(data);

     return (
      <>
        <div>
          {booksArray.map((book) => (
            <BookCard
              gutenberg_id = {book.gutenberg_id}
              img_url={book.img_url}
              title={book.title}
              author={book.author}
              isBookmarked={isBookmarked(book.gutenberg_id)}
            />
          ))}
        </div>
      </>
      ) 
};

export default DisplayCards;