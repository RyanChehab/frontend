import React,{useContext}from 'react';
import BookCard from '../Books/BookCard';
import { CardsContext } from '../../context/CardsContext';

const DisplayByCategory = ()=>{
    const{category} = useContext(CardsContext);

    const BooksArray = Object.values(category);
    console.log("category:", category)
}

export default DisplayByCategory;