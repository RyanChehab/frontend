import React,{useContext}from "react";
import { RepositoryContext } from "../../../../context/RepositoryContext";
import { RepositoriesContainer } from "../../Writer/Repositories";
import { RepositoryCard } from "../../Writer/Repositories";
import { CardImage } from "../../Writer/Repositories";
import { CardDetails } from "../../Writer/Repositories";

const ReaderRepository = () => {
    const {repositories} = useContext(RepositoryContext)

    return(
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
                </RepositoryCard>
            ))}
        </RepositoriesContainer>
)
}
export default ReaderRepository;