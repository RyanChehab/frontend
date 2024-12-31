import React,{useContext}from 'react';
import BookCard from '../Books/BookCard';
import { CardsContext } from '../../context/CardsContext';

const DisplayByCategory = ()=>{
    const{category,catLoading} = useContext(CardsContext);

    const BooksArray = Object.values(category);
    console.log("category:", category)
    return catLoading ? (
        <p>Loading...</p>
      ) : BooksArray.length > 0 ? (
      <>
        <p className="display-title">Fetured Books</p>
        <div className="books-container">
          {BooksArray.map((book, index) => (
            <BookCard
              gutenberg_id = {book.gutenberg_id}
              img_url={book.img_url}
              title={book.title}
              author={book.author}
              
            />
          ))}
        </div>
      </>
      ) : (
        <p className="display-title">No books available</p>
      );
}

export default DisplayByCategory;