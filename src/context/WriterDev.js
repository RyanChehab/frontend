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

}
