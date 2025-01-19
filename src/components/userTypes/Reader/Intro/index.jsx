import React, {useContext} from "react";
import { IntroContext } from "../../../../context/IntroContext";
import "./IntroBanner.css"; // Add corresponding CSS file

const IntroBanner = () => {

  const{repository} = useContext(IntroContext)

  if (!repository) {
    return <div>Loading...</div>;
}
  
  return (
    <div className="intro-banner">
      {/* Left Section */}
      <div className="intro-left">
        <h1 className="intro-title">{repository.title}</h1>
        <p className="intro-description">{repository.description}</p>
        <button className="visit-repo-btn">
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
