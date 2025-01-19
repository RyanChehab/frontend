import React from "react";
import './Writer.css';
import WriterNav from "./writerNav";
import DisplayCards from "./BooksDisplay";
import Intro from "./Intro";
const Writer = ()=>{

    return(
<>
        <WriterNav/>
        <Intro/>
        <DisplayCards/>
</>
    )
}

export default Writer;