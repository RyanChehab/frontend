import React,{useContext}from 'react';
import BookCard from '../BookCard';
import { CardsContext } from '../../../../context/CardsContext';
import WriterNav from '../writerNav';
import './displatByCategory.css';
const DisplayByCategory = ()=>{
    const{category,catLoading} = useContext(CardsContext);

    const slideBooks = (rowId) => {
      const row = document.getElementById(rowId);
      if (row) {
        row.scrollBy({
          left: 300, // Adjust the scroll distance as needed
          behavior: "smooth",
        });
      }
    };  

    const BooksArray = category
    console.log("category:", category)
    return (
      <>
        <WriterNav /> {/* Navbar is always displayed */}
        {catLoading ? (
          <p>Loading...</p>
        ) : Object.keys(BooksArray).length > 0 ? (
          <>
            <p className="display-title">Categories</p>
            <div className="categories-container">
              {Object.entries(BooksArray).map(([category, books]) => (
                <div key={category} className="category-row">
                  {/* Display category title */}
                  <h2 className="category-title">{category}</h2>
                  <div className="books-row-container">
                    <div className="books-row" id={`books-row-${category}`}>
                      {books.map((book, index) => (
                        <BookCard
                          key={book.gutenberg_id || index}
                          gutenberg_id={book.gutenberg_id}
                          img_url={book.img_url}
                          title={book.title}
                          author={book.author}
                        />
                      ))}
                    </div>
                    {/* View More button */}
                    {books.length > 3 && (
                      <button
                        className="view-more"
                        onClick={() => slideBooks(`books-row-${category}`)}
                      >
                        View More
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="display-title">No books available</p>
        )}
      </>
    );
    }

export default DisplayByCategory;