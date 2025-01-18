import React,{useContext}from "react";
import { RepositoryContext } from "../../../../context/RepositoryContext";
import { useNavigate } from "react-router-dom";
import { RepositoriesContainer } from "../../Writer/Repositories";
import { RepositoryCard } from "../../Writer/Repositories";
import { CardImage } from "../../Writer/Repositories";
import { CardDetails } from "../../Writer/Repositories";
import { CenterButton } from "../../Writer/Repositories";
import { WriterDevContext } from "../../../../context/WriterDev";
import { ReaderRepositoryContext } from "../../../../context/ReaderRepositoryContext";
import { ReaderBookmarkContext } from "../../../../context/ReaderBookmarkContext";

const ReaderCard = ({id, title, img_url, description, isBookmarked}) => {

    const {handleGetContent} = useContext(WriterDevContext)
    const {handleBookmark,removeBookmark} = useContext(ReaderBookmarkContext)


    const navigate = useNavigate()

    const handleBookmarkToggle = () => {
        if (isBookmarked) {
            removeBookmark(id);
        } else {
            handleBookmark(id);
        }
    };
    
    return(
    <>
        <RepositoriesContainer>

                <RepositoryCard>

                {/* Full-Card Background Image */}
                
                    <CardImage
                        style={{ backgroundImage: `url(${img_url})` }}
                    >
                        <button
                            className={`bookmark-btn ${isBookmarked ? "bookmarked" : ""}`}
                            onClick={handleBookmarkToggle}
                        >

                    <i className="fas fa-bookmark"></i>
                </button></CardImage>

                    {/* Details Section */}
                    <CardDetails className="card-details">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </CardDetails>
                    <CenterButton onClick={async ()=>{
                            await handleGetContent(id)
                            navigate(`/ReaderDev/${id}`,{state:{RepoTitle: title}})
                    }}>
                        Visit 
                    </CenterButton>
                </RepositoryCard>
        </RepositoriesContainer>
    </>
)
}
export default ReaderCard;