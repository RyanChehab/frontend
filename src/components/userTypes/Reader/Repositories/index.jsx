import React,{useContext}from "react";
import { RepositoryContext } from "../../../../context/RepositoryContext";
import { RepositoriesContainer } from "../../Writer/Repositories";
import { RepositoryCard } from "../../Writer/Repositories";
import { FormContainer } from "../../Writer/Repositories";
import { CardImage } from "../../Writer/Repositories";
import { CardDetails } from "../../Writer/Repositories";
import { ModalOverlay } from "../../Writer/Repositories";

const ReaderRepository = () => {
    const {repositories} = useContext(RepositoryContext)

    return()
} 
export default ReaderRepository;