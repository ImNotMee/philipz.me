import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import { errorPageContent } from "../constants/const";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-code">{errorPageContent.errorCode}</h1>
          <h2 className="error-title">{errorPageContent.title}</h2>
          <p className="error-message">
            {errorPageContent.message}
          </p>
          <p className="error-suggestion">
            {errorPageContent.suggestion}
          </p>
          
          <div className="error-actions">
            <Link to="/" className="home-link">
              <i className="fas fa-home"></i>
              {errorPageContent.homeButtonText}
            </Link>
            <button 
              className="back-button" 
              onClick={() => window.history.back()}
            >
              <i className="fas fa-arrow-left"></i>
              {errorPageContent.backButtonText}
            </button>
          </div>
        </div>
        
        <div className="error-visual">
          <div className="glitch-text" data-text={errorPageContent.errorCode}>
            {errorPageContent.errorCode}
          </div>
          <div className="floating-elements">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
