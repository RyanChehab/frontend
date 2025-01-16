import React, { useContext } from "react";
import ReaderCard from "../RepositoryCard";
import { ReaderBookmarkContext } from "../../../../context/ReaderBookmarkContext";
import { ReaderRepositoryContext } from "../../../../context/ReaderRepositoryContext";


const DisplayRepos = () => {
    
    const {repositories,loading} = useContext(ReaderRepositoryContext)
    // const {isBookmarked} = useContext(ReaderBookmarkContext)
}

export default DisplayRepos;

