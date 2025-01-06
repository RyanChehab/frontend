import { useState,createContext } from "react";
import { useNavigate } from "react-router-dom";

export const WriterDevContext = createContext()

export const WriterDevProvider = () => {
    const navigate = useNavigate()
    const [fanfiction, setFanfiction] = useState(""); 
    const [currentPage, setCurrentPage] = useState(1); 

    const handleBack = () => {
        navigate("/writer")
    };

    const handlePageChange = (direction) => {
        if (direction === "next" && currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        } else if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return()

}
