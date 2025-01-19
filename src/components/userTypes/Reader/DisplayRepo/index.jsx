import React, { useContext } from "react";
import ReaderCard from "../ReaderCard";
import { ReaderBookmarkContext } from "../../../../context/ReaderBookmarkContext";
import { ReaderRepositoryContext } from "../../../../context/ReaderRepositoryContext";


const DisplayRepos = () => {
    
    const {repositories,loading} = useContext(ReaderRepositoryContext)
    const {isBookmarked} = useContext(ReaderBookmarkContext)
    const data = Object.values(repositories)

    const limitedData = data.slice(0, 10);

    return loading ? (
        <p className="display-loading-message">Loading...</p>
    ):
    (<>
        <p className="display-title">Featured Repositories</p>
        <div className="books-container">
            {limitedData.map((repo) =>(
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

export default DisplayRepos;

