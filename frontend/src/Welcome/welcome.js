import React from "react";
import "./welcome.css";

const Welcome = ({ onContinue }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome!</h1>
      <button className="continue-button" onClick={onContinue}>
        Continue <span className="arrow-icon">➔</span>
      </button>
    </div>
  );
};

export default Welcome;
