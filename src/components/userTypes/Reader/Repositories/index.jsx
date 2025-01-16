import React,{useContext}from "react";
import { RepositoryContext } from "../../../../context/RepositoryContext";
import { useNavigate } from "react-router-dom";
import { RepositoriesContainer } from "../../Writer/Repositories";
import { RepositoryCard } from "../../Writer/Repositories";
import { CardImage } from "../../Writer/Repositories";
import { CardDetails } from "../../Writer/Repositories";
import { CenterButton } from "../../Writer/Repositories";
import { WriterDevContext } from "../../../../context/WriterDev";

const ReaderRepository = () => {
    const {repositories} = useContext(RepositoryContext)
    const {handleGetContent} = useContext(WriterDevContext)
    const navigate = useNavigate()
    
    return(
    <>
        <p className="display-title">Featured Repositories</p>
        <RepositoriesContainer>
            {repositories.map((repo) => (
                <RepositoryCard key={repo.id}>
                    {/* Full-Card Background Image */}
                    <CardImage
                        style={{ backgroundImage: `url(${repo.img_url})` }}
                    ></CardImage>

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