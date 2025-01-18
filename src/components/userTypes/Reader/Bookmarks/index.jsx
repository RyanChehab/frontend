import React,{useContext} from "react";
import { ReaderBookmarkContext } from "../../../../context/ReaderBookmarkContext";

const ReaderBookmarks = () => {
    const {repositories,loading} = useContext(ReaderRepositoryContext)
    const {isBookmarked,bookmarkedBooks} = useContext(ReaderBookmarkContext)
    const data = Object.values(repositories)

    const bookmarked = data.filter(repo => bookmarkedBooks.includes(repo.id));

    return loading ? (
        <p className="display-loading-message">Loading...</p>
    ):
    (<>
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

