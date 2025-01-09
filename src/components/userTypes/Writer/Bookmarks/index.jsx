import React from 'react'
import BookCard from "../BookCard";

const Bookmarks = ({books}) => {
    const bookmarkedBooks = books.filter(book => book.isBookmarked);
}