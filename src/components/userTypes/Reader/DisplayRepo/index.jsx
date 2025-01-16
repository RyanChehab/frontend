import React, { useContext } from "react";
    
import { ReaderBookmarkContext } from "../../../../context/ReaderBookmarkContext";
import { ReaderRepositoryContext } from "../../../../context/ReaderRepositoryContext";

const DisplayRepos = () => {
    
    const {repositories} = useContext(ReaderRepositoryContext)

}

export default DisplayRepos;

