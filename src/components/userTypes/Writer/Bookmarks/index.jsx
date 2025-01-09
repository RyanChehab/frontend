import React from 'react'
import BookCard from "../BookCard";

const Bookmarks = ({books}) => {
    const bookmarkedBooks = books.filter(book => book.isBookmarked);

    return(
        <div>
            <h1>Bookmarked Books</h1>
            <div className="bookmarks-container">
                {bookmarkedBooks.length > 0 ? (
                    bookmarkedBooks.map(book => <BookCard 
                        gutenberg_id={book.gutenberg_id}
                        img_url={book.img_url}
                        title={book.title}
                        author={book.author}
                        isBookmarked={true}
                         />)
                ) : (
                    <p>No bookmarks found.</p>
                )}
            </div>
        </div>
    )
}

export default Bookmarks;