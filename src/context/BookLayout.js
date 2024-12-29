import React,{createContext, useState, useEffect, useContext } from "react";

const BookLayoutContext = createContext();

export const BookLayoutProvider = ({ children }) => {
    const [content, setContent] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

}