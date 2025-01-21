import React from "react";
import {useNavigate} from 'react-router-dom';
import './Intro.css'
const Intro = () => {

    const navigate = useNavigate()
    return(
        <div className="intro-container">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <h1 className="intro-heading">Unleash Your <span className="imagination">Imagination</span></h1>
        <p className="intro-subheading">
          Every <span className="tale">tale</span> has another side waiting to be told. Show the world yours...
        </p>
        <button className="intro-btn" onClick={()=>{navigate('/repositories')}}>
          Explore Your Repositories
        </button>
      </div>
    </div>
    )
}

export default Intro;