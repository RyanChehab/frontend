import React from "react";

import "./IntroBanner.css"; // Add corresponding CSS file

const IntroBanner = () => {
  return (
    <div className="intro-banner">
      {/* Left Section */}
      <div className="intro-left">
        <h1 className="intro-title">Saving Black</h1>
        <p className="intro-description">Harry Potter goes back in time in search for his lost godfather</p>
        <button className="visit-repo-btn">
          Visit Repository 
        </button>
      </div>

      {/* Right Section */}
      <div className="intro-right">
        <div className="card-image">
          <img />
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
