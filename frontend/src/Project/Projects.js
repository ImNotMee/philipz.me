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
    <div className="projects-container">
      <section>
        <h1 className="projects-header">Personal Projects</h1>
        <hr className="divider" />
        {renderProjects(personalProjects)}
      </section>

      <section>
        <h1 className="projects-header">Academic Projects</h1>
        <hr className="divider" />
        {renderProjects(academicProjects)}
      </section>
    </div>
  );
};

export default Projects;
