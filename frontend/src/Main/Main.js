import React from "react";
import './main.css';
import { 
  aboutMeText, 
  sectionHeaders, 
  workExperiences, 
  programmingLanguages, 
  frameworksLibraries, 
  toolsTechnologies 
} from "../constants/const";

const Main = () => {
  return (
    <div className="main-body">
      <div className="main-content">
        <section>
          <h3 className="main-header">{sectionHeaders.aboutMe}</h3>
          <p className="main-text">{aboutMeText}</p>
        </section>

        <section>
          <h3 className="main-header">{sectionHeaders.workExperiences}</h3>
          {workExperiences.map((experience, index) => (
            <p key={index} className="main-text">
              {experience.title} @ {experience.company}{" "}
              <span className="highlight">{experience.duration}</span>
            </p>
          ))}
        </section>

        <div className="skills-container">
          <div className="skills-box">
            <h3 className="main-header">{sectionHeaders.programmingLanguages}</h3>
            <ul className="skills-list">
              {programmingLanguages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>

          <div className="skills-box">
            <h3 className="main-header">{sectionHeaders.frameworksLibraries}</h3>
            <ul className="skills-list">
              {frameworksLibraries.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>

          <div className="skills-box">
            <h3 className="main-header">{sectionHeaders.toolsTechnologies}</h3>
            <ul className="skills-list">
              {toolsTechnologies.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
