import React from "react";
import "./projects.css";
import Projectbox from "./Projectbox.js";
import { personalProjects, academicProjects } from "../constants/const";

const Projects = () => {
  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <Projectbox
        key={index}
        title={project.title}
        pic={project.pic}
        text={project.text}
        url={project.url}
        link={project.link}
      />
    ));

  return (
    <div className="projects-body">
      <div className="projects-content">
        <section className="projects-section">
          <h3 className="section-header">
            <i className="fas fa-code-branch"></i>
            Personal Projects
          </h3>
          <div className="projects-grid">
            {renderProjects(personalProjects)}
          </div>
        </section>

        <section className="projects-section">
          <h3 className="section-header">
            <i className="fas fa-graduation-cap"></i>
            Academic Projects
          </h3>
          <div className="projects-grid">
            {renderProjects(academicProjects)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
