import React,{useContext} from "react";
import { CardsContext } from "../../../context/CardsContext";
import BookCard from "../BookCard";

const DisplayCards = ()=>{
    const{data} = useContext(CardsContext)

    return(
        <div className="books-container">
            
        </div>
    )
}