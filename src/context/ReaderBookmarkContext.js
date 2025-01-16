import React, {createContext,useState} from "react";
import fetchData from "../utility/fetch";

export const ReaderBookmarkContext = createContext()

export const ReaderBookmarkProvider = () =>{

    const [bookmarkedRepo,setBookmarkedRepo] = useState([])
}

