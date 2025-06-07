import React from "react";
import './main.css';
import { 
  aboutMeText, 
  sectionHeaders, 
  workExperiences, 
  programmingLanguages, 
  frameworksLibraries, 
  toolsTechnologies, 
  companiesUrl
} from "../constants/const";

const Main = () => {
  return (
    <div className="main-body">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Philip Zhang</h1>
            <h2 className="hero-subtitle">Software Engineer</h2>
            <p className="hero-description">{aboutMeText}</p>
          </div>
        </div>
      </section>

      <div className="main-content">
        {/* Work Experience Section */}
        <section className="experience-section">
          <h3 className="section-header">
            <i className="fas fa-briefcase"></i>
            {sectionHeaders.workExperiences}
          </h3>
          <div className="timeline">
            {workExperiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h4 className="job-title">{experience.title}</h4>
                  <h5 className="company-name">
                    <a className="company-link" href={companiesUrl[experience.company]}>
                      {experience.company}
                    </a>
                  </h5>
                  <span className="duration highlight">{experience.duration}</span>
                  {experience.description && (
                    <p className="job-description">{experience.description}</p>
                  )}
                  {experience.technologies && (
                    <div className="tech-stack">
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h3 className="section-header">
            <i className="fas fa-tools"></i>
            Technical Skills
          </h3>
          <div className="skills-container">
            <div className="skills-box">
              <h4 className="skills-header">
                <i className="fas fa-code"></i>
                {sectionHeaders.programmingLanguages}
              </h4>
              <div className="skills-grid">
                {programmingLanguages.map((lang, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{lang.name}</span>
                    <div className="skill-level">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${lang.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-box">
              <h4 className="skills-header">
                <i className="fas fa-layer-group"></i>
                {sectionHeaders.frameworksLibraries}
              </h4>
              <div className="skills-grid">
                {frameworksLibraries.map((framework, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{framework.name}</span>
                    <div className="skill-level">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${framework.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-box">
              <h4 className="skills-header">
                <i className="fas fa-wrench"></i>
                {sectionHeaders.toolsTechnologies}
              </h4>
              <div className="skills-grid">
                {toolsTechnologies.map((tool, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{tool.name}</span>
                    <div className="skill-level">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${tool.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
