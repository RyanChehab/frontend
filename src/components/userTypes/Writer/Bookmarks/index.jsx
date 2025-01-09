import React,{useContext} from 'react'
import BookCard from "../BookCard";
import { CardsContext } from '../../../../context/CardsContext';
import { useBookmark } from "../../../../context/BookCardContext";
import WriterNav from '../writerNav';
const Bookmarks = () => {
    const {data, loading} = useContext(CardsContext)
    const { isBookmarked, bookmarkedBooks } = useBookmark();  
    
    const books = Object.values(data);

    const bookmarked = books.filter(book => bookmarkedBooks.includes(book.gutenberg_id));
    

    if (loading) return <p>Loading bookmarks...</p>;
    
    return(
        <>
        <WriterNav/>
        <div>
            <h1 className="display-title">Bookmarked Books</h1>
            <div className="books-container">
                {bookmarked.length > 0 ? (
                    bookmarked.map(book => <BookCard 
                        gutenberg_id={book.gutenberg_id}
                        img_url={book.img_url}
                        title={book.title}
                        author={book.author}
                        isBookmarked={isBookmarked(book.gutenberg_id)}
                         />)
                ) : (
                    <p>No bookmarks found.</p>
                )}
            </div>
        </div>
        </>
    )
}

export default Bookmarks;