import React from "react";
import './Writer.css';
import WriterNav from "./writerNav";
import DisplayCards from "./BooksDisplay";
const Writer = ()=>{

    return(
<>
        <WriterNav/>
        <div className="WriterBanner"/>
        <DisplayCards/>
</>
    )
}

export default Writer;