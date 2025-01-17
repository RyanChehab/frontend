import React, { useContext } from "react";
import ReaderCard from "../RepositoryCard";
import { ReaderBookmarkContext } from "../../../../context/ReaderBookmarkContext";
import { ReaderRepositoryContext } from "../../../../context/ReaderRepositoryContext";


const DisplayRepos = () => {
    
    const {repositories,loading} = useContext(ReaderRepositoryContext)
    // const {isBookmarked} = useContext(ReaderBookmarkContext)

    return loading ? (
        <p className="display-loading-message">Loading...</p>
    ):
    (<>
        <p className="display-title">Featured Repositories</p>
        <div className="books-container">
            {repositories.map((repo) =>(
                <ReaderCard
                id = {repo.id}
                title = {repo.title}
                isBookmarked = {repo.isBookmarked}
                img_url = {repo.img_url}
                />
            ))}
        </div>
    </>
    )
}

export default DisplayRepos;

