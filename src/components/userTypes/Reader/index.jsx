import React from "react";
import ReaderNav from "./Nav";
import DisplayRepos from "./DisplayRepo";
import IntroBanner from "./Intro";

const Reader = () => {
    return(
    <>
        <ReaderNav/>
        <IntroBanner/>
        <DisplayRepos/>
    </>
    )
}

export default Reader;