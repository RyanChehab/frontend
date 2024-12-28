import React,{useContext,useState} from "react";
import { CardsContext } from "../../../context/CardsContext";
import BookCard from "../BookCard";

const DisplayCards = ()=>{
    const { data, loading} = useContext(CardsContext);
    const booksArray = Object.values(data);

     console.log("Books Array:", booksArray);
     return loading ? (
        <p>Loading...</p>
      ) : booksArray.length > 0 ? (
        <div className="books-container">
          {booksArray.map((book, index) => (
            <BookCard
              key={index}
              img_url={book.img_url}
              title={book.title}
              author={book.author}
            />
          ))}
        </div>
      ) : (
        <p>No books available</p>
      );
};

export default DisplayCards;