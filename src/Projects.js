import React, { Component} from 'react';
import './projects.css';
import Projectbox from './components/Projectbox.js';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1 id="project-h1">Personal Projects</h1>
        <hr id="line"></hr>
        <Projectbox
          title="Angleo"
          pic="icons/javascript.png"
          text={"A mobile application build using React Native that helps to solve the cultural divide between the English and French speaking communinites in Quebec. (Built during ConUHacks IV)"}
          url="https://github.com/alvintangz/angleo"
        />
        <Projectbox
          title="SenpaiBot (Discord Server Bot)"
          pic="icons/python.png"
          text={"A Python based bot that uses Discord API and it designed for the Discord server that our team uses. It contains many features, which helps us as we are playing games.)"}
          url="https://github.com/SnoopySnipe/SenpaiBot"
        />
        <Projectbox
          title="Rhythm Rivals"
          pic="icons/java.png"
          text={"A music rhythm game that has keys for the user(s) to press as coloured circles drop down, acting like beats. This is done through using GreenFoot UI and Java. (Built during a Hack The Valley I [UTSC Hackathon])"}
          url="https://github.com/AdityaMatam/RhythmRivals"
        />
        <Projectbox
          title="Old Personal Website"
          pic="icons/html.png"
          text={"This project was built using vanilla JS, HTML and CSS. It was my first time interacting with these stacks. Mainly for me to get fimilar with HTML, CSS and JS."}
          url="http://ImNotMee.github.io"
        />

       <h1 id="project-h1">Academic Projects:</h1>
       <hr id="line"></hr>
        <Projectbox
          title="TEQ Reporting App"
          pic="icons/python.png"
          text={"A Python based application designed for The Toronto East Quadrant Local Immigration Partnership (TEQ) to centralize the collected data from agencies and generate reports, summaries for TEQ."}
          url="https://github.com/ImNotMee/TEQ-App"
        />
        <Projectbox
          title="BigBoiBank$"
          pic="icons/java.png"
          text={"A Java based Android application that simluates a real bank application and is built with 4 other members. This software was designed based on OOP."}
          url="https://github.com/ImNotMee/BigBoiBank"
        />
        <Projectbox
          title="A Simple Search Engine"
          pic="icons/c.png"
          text={"A C program that searches through txt files for a given key word, and outputs the number of occurences in each file. This is done through the concept of forking and piping."}
          url=""
        />
      </div>
    );
  }
}

export default Projects;
