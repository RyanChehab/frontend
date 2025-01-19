import React,{useContext} from "react";
import { ReaderBookmarkContext } from "../../../../context/ReaderBookmarkContext";
import ReaderCard from "../ReaderCard";
import { ReaderRepositoryContext } from "../../../../context/ReaderRepositoryContext";
import ReaderNav from "../Nav";
import '../../Writer/BooksDisplay/BooksDisplay.css'
const ReaderBookmarks = () => {
    const {repositories,loading} = useContext(ReaderRepositoryContext)
    const {isBookmarked,bookmarkedBooks} = useContext(ReaderBookmarkContext)
    const data = Object.values(repositories)

    const bookmarked = data.filter(repo => bookmarkedBooks.includes(repo.id));

    return loading? (
        <>
        <ReaderNav/>
        <p className="display-loading-message">Loading...</p>
        </>
    ): bookmarked.length === 0 ? (
        <>
        <ReaderNav />
        <p className="display-title">You have no bookmarked repositories yet.</p>
        </>
    ):(
    <>
        <ReaderNav/>
        <p className="display-title">Bookmarked Repositories</p>
        <div className="books-container">
            {bookmarked.map((repo) =>(
                <ReaderCard
                id = {repo.id}
                title = {repo.title}
                isBookmarked = {isBookmarked(repo.id)}
                img_url = {repo.img_url}
                description = {repo.description}
                />
            ))}
        </div>
    </>
    )
}

export default ReaderBookmarks;