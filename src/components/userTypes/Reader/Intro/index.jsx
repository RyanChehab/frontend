import React from "react";

import "./IntroBanner.css"; // Add corresponding CSS file

const IntroBanner = () => {
  return (
    <div className="intro-banner">
      {/* Left Section */}
      <div className="intro-left">
        <h1 className="intro-title">Finals Exam</h1>
        <p className="intro-description">A teacher gets shocking news that will ruin his life</p>
        <button className="visit-repo-btn">
          Visit Repository 
        </button>
      </div>

      {/* Right Section */}
      <div className="intro-right">
        <div className="card-image">
          
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
