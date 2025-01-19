import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { IntroContext } from "../../../../context/IntroContext";
import { WriterDevContext } from "../../../../context/WriterDev";
import "./IntroBanner.css"; // Add corresponding CSS file

const IntroBanner = () => {

  const{repository} = useContext(IntroContext)
  const navigate = useNavigate()
  const {handleGetContent} = useContext(WriterDevContext)

  if (!repository) {
    return <div>Loading...</div>;
}
  
  return (
    <div className="intro-banner">
      {/* Left Section */}
      <div className="intro-left">
        <h1 className="intro-title">{repository.title}</h1>
        <p className="intro-description">{repository.description}</p>
        <button className="visit-repo-btn" onClick={async ()=>{
                            await handleGetContent(repository.id)
                            navigate(`/ReaderDev/${repository.id}`,{state:{RepoTitle: title}})
                    }}>
          Visit Repository 
        </button>
      </div>

      {/* Right Section */}
      <div className="intro-right">
        <div className="card-image">
          <img src={repository.img_url}/>
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
