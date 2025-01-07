import React from "react";
import './Intro.css'
const Intro = () => {

    return(
        <div className="intro-container">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <h1 className="intro-heading">Unleash Your <span className="imagination">Imagination</span></h1>
        <p className="intro-subheading">
          Every tale starts with a single word. Start yours now.
        </p>
        <button className="intro-btn">
          Explore Your Repositories
        </button>
      </div>
    </div>
    )
}

export default Intro;