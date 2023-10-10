import React, { Component } from "react";
import './main.css';

class Main extends Component {
  render() {
    return [
      <div id="main-body">
        <div class="main">
          <h3 id="main-h3">About me:</h3>
          <p id="main-p">University of Toronto Computer Science Alumni, and with 2 years of professional backend focused experiences with Java Spring Boot and 1 year of DevOps experiences. Also experienced in Python and JavaScript with various libraries and frameworks.</p>
          <h3 id="main-h3">Work Experiences:</h3>
            <p id="main-p">Software Engineer II @ UKG <span style={{color: "#388cd6"}}>[Jan - Aug 2023]</span> </p>
            <p id="main-p">Software Engineer @ UKG <span style={{color: "#388cd6"}}>[Aug 2021 - Dec 2022]</span> </p>
            <p id="main-p">Software Developer Intern @ UKG <span style={{color: "#388cd6"}}>[May 2021 - Aug 2021]</span> </p>
            <p id="main-p">DevOps Engineer Intern @ Oracle <span style={{color: "#388cd6"}}>[May 2019 - May 2020]</span> </p>
            <p id="main-p">Technical Analyst @ Toyota Canada Inc <span style={{color: "#388cd6"}}>[Jan 2018 - Apri 2018]</span> </p>
          <div id="t">
            <div>
              <h3 id="main-h3">Programming Languages:</h3>
              <ul id="lst">
                <li>Java</li>
                <li>Python</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>TypeScript</li>
                <li>C</li>
                <li>Bash</li>
              </ul>
            </div>
            <div id="box">
              <h3 id="main-h3">Frameworks &amp; Libraries:</h3>
              <ul id="lst">
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>React js</li>
                <li>AngularJS</li>
                <li>Pandas</li>
              </ul>
            </div>
            <div id="box">
              <h3 id="main-h3">Tools &amp; Other Tech:</h3>
              <ul id="lst">
                <li>Git</li>
                <li>MySQL & SQLite</li>
                <li>REST API</li>
                <li>TeamCity</li>
                <li>Bitbucket</li>
                <li>Chef</li>
                <li>Sensu</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Kafka</li>
                <li>RabbitMQ</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ]}
}

export default Main;
