import React from "react";
import "./projects.css";

const Projectbox = ({ title, text, pic, url, link }) => {
  const renderIcon = (href, iconSrc, altText) =>
    href ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={iconSrc} alt={altText} />
      </a>
    ) : null;

  return (
    <div className="project-box">
      <div className="project-details">
        <h2 className="project-title">
          {title}
          <img className="icon project-icon" src={pic} alt={`${title} icon`} />
          {renderIcon(url, "icons/GitHub-black.png", "GitHub link")}
          {renderIcon(link, "icons/link.png", "Live link")}
        </h2>
        <p className="project-description">{text}</p>
      </div>
    </div>
  );
};

export default Projectbox;
