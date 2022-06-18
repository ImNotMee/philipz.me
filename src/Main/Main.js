import React, { Component } from "react";
import './main.css';

class Main extends Component {
  render() {
    return [
      <div id="main-body">
        <div class="main">
          <h3 id="main-h3">About me:</h3>
          <p id="main-p">I am a recent Computer Science graduate from University of Toronto. Currently a Software Engineer.</p>
          <h3 id="main-h3">Work Experiences:</h3>
          <p id="main-p">Software Engineer at UKG <span style={{color: "#388cd6"}}>[Aug 2021 - Present]</span> </p>
          <p id="main-p">Software Developer Intern at UKG <span style={{color: "#388cd6"}}>[May 2021 - Aug 2021]</span> </p>
          <p id="main-p">DevOps Engineer Intern at Oracle <span style={{color: "#388cd6"}}>[May 2019 - May 2020]</span> </p>
          <p id="main-p">Technical Analyst at Toyota Canada Inc <span style={{color: "#388cd6"}}>[Jan 2018 - Apri 2018]</span> </p>
          <h3 id="main-h3">Extracurricular Activites:</h3>
          <ul id="lst">
            <li>VP of Internal Tech and Relations at DSC@UTSC <span style={{color: "#388cd6"}}>[2019-2020]</span></li>
            <li>Adminstration Assistant at ROCSAUT UTSC <span style={{color: "#388cd6"}}>[2019-2020]</span></li>
            <li>Assistant Director at UTHKSC <span style={{color: "#388cd6"}}>[2018-2020]</span></li>
            <li>Software Developer at DSC@UTSC <span style={{color: "#388cd6"}}>[2019]</span></li>
            <li>Treasurer of Model United Nation Club <span style={{color: "#388cd6"}}>[2015-2016]</span></li>
            <li>Customer Service Assistant at North York Harvest<span style={{color: "#388cd6"}}>[2015-2016]</span></li>
            <li>Members of various school bands <span style={{color: "#388cd6"}}>[2012-2016]</span></li>
            <li>Sergeant at Royal Canadian Air Cadets <span style={{color: "#388cd6"}}>[2010-2014]</span></li>
          </ul>
          <div id="t">
            <div>
              <h3 id="main-h3">Languages:</h3>
              <ul id="lst">
                <li>Java</li>
                <li>Python</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Bash</li>
                <li>C</li>
              </ul>
            </div>
            <div id="box">
              <h3 id="main-h3">Frameworks &amp; Libraries:</h3>
              <ul id="lst">
                <li>Node.js</li>
                <li>React js</li>
                <li>AngularJS</li>
                <li>Pandas</li>
              </ul>
            </div>
            <div id="box">
              <h3 id="main-h3">Other Stacks:</h3>
              <ul id="lst">
                <li>Git & SVN</li>
                <li>MySQL & SQLite</li>
                <li>TeamCity</li>
                <li>Chef</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ]}
}

export default Main;
