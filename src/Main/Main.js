import React, { Component } from "react";
import './main.css';

class Main extends Component {
  render() {
    return (
      <div id="main-body">
             <div className="left-main">
                <div>
                  <img id="me" src={process.env.PUBLIC_URL + "icons/picofme.jpg"} alt=""></img>
                </div>
               <div>
                   <a href="https://www.linkedin.com/in/philip-z/"><img id="icons" src="icons/linkedin.png" alt="" /></a>
                   <a href="https://github.com/ImNotMee"><img id="icons" src="icons/GitHub.png" alt=""/></a>
                   <a href="mailto:philip.zhang@mail.utoronto.ca"><img id="icons" src="icons/email.png" alt=""/></a>
                   <a href="https://www.instagram.com/_philzpng_/"><img id="icons" src="icons/instagram.png" alt="" /></a>
               </div>
             </div>
             <div className="right-main">
                     <h3 id="main-h3">About me:</h3>
                     <p id="main-p" id="main-p">I am a 4th year Computer Science student @ University of Toronto.</p>
                     <p id="main-p">Also, seeking for full-time & internships as a <strong>Software Engineer</strong>. Expected to graduate in May 2021.</p>
                     <h3 id="main-h3">Work Experiences:</h3>
                         <p id="main-p">DevOps Engineer Intern at Oracle <span style={{color: "#388cd6"}}>[May 2019 - May 2020]</span> </p>
                         <p id="main-p">Technical Analyst at Toyota Canada Inc <span style={{color: "#388cd6"}}>[Jan 2018 - Apri 2018]</span> </p>
                     <h3 id="main-h3">Extracurricular Activites:</h3>
                     <ul id="rightlst">
                         <li>VP of Internal Tech and Relations at DSC@UTSC</li>
                         <li>Former Assistant Director at UTHKSC</li>
                         <li>Former Software Developer at DSC@UTSC</li>
                         <li>Former Treasurer of Model United Nation Club</li>
                         <li>Former Customer Service Assistant at North York Harvest</li>
                         <li>Former Sergeant at Royal Canadian Air Cadets</li>
                         <li>Former member of various school bands</li>
                     </ul>

                    <div id="t">
                    <div id="box1">
                         <h3 id="main-h3">Languages:</h3>
                         <ul id="lst">
                           <li>Java</li>
                           <li>Python</li>
                           <li>HTML/CSS</li>
                           <li>JavaScript</li>
                           <li>SQL</li>
                           <li>Bash</li>
                           <li>C</li>
                         </ul>
                       </div>

                    <div id="box2">
                      <h3 id="main-h3">Frameworks & Libraries:</h3>
                       <ul id="lst">
                         <li>Node.js</li>
                         <li>React js</li>
                         <li>AngularJS</li>
                         <li>Pandas</li>
                       </ul>
                     </div>

                    <div id="box2">
                        <h3 id="main-h3">Other Stacks:</h3>
                       <ul id="lst">
                         <li>Git/SVN</li>
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
    )}
}

export default Main;
