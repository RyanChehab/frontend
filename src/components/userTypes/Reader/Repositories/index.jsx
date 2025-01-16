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

const ReaderRepository = () => {
    const {repositories} = useContext(ReaderRepositoryContext)
    const {handleGetContent} = useContext(WriterDevContext)
    const {handleBookmark} = useContext(ReaderBookmarkContext)
    const navigate = useNavigate()

    // const { handleBookmark, removeBookmark} = useBookmark();

    // const handleBookmarkToggle = () => {
    //     if (isBookmarked) {
    //         removeBookmark(bookmarkable_id);
    //     } else {
    //         handleBookmark(bookmarkable_id);
    //     }
    // };
    
    return(
    <>
        {/* Title */}
        <p className="display-title">Featured Repositories</p>

        
        <RepositoriesContainer>

            {/* Mapping repos */}
            {repositories.map((repo) => (

                <RepositoryCard key={repo.id}>

                {/* Full-Card Background Image */}
                
                    <CardImage
                        style={{ backgroundImage: `url(${repo.img_url})` }}
                    ><button
                    className='bookmark-btn'
                    onClick={()=>{handleBookmark(repo.id)}}
                    >
                    <i className="fas fa-bookmark"></i>
                </button></CardImage>

                    {/* Details Section */}
                    <CardDetails className="card-details">
                        <h3>{repo.title}</h3>
                        <p>{repo.description}</p>
                    </CardDetails>
                    <CenterButton onClick={async ()=>{
                            await handleGetContent(repo.id)
                            navigate(`/ReaderDev/${repo.id}`,{state:{RepoTitle:repo.title}})
                    }}>
                        Visit 
                    </CenterButton>
                </RepositoryCard>
            ))}
        </RepositoriesContainer>
    </>
)
}
export default ReaderRepository;