import React, { Component } from 'react';
import './portfolio.css';
import Projects from '../Project/Projects.js';
import Main from '../Main/Main.js';
import Pictures from '../components/Pictures.js';
import Welcome from '../Welcome/welcome.js';
import { profileInfo } from "../constants/const";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Welcome onContinue={this.handleContinue} />, // Default page is Welcome
    };
    this.updatePage = this.updatePage.bind(this); // Binding updatePage here
  }

  handleContinue = () => {
    this.setState({ page: <Main /> }); // Set the page to Main when Continue is clicked
  };

  updatePage(e) {
    let temp = "";
    switch (e.target.value) {
      case "photo":
        temp = <Pictures />;
        break;
      case "me":
        temp = <Main />;
        break;
      case "projects":
        temp = <Projects />;
        break;
      default:
        temp = <Welcome onContinue={this.handleContinue} />; // Include onContinue in the Welcome page again
    }
    this.setState({ page: temp });
  }

  render() {
    const { page } = this.state;

    return (
      <div className="Portfolio">
        <div className="left">
          <div id="logo">
            <img id="logo-img" src="icons/picofme.jpg" alt="Logo" />
          </div>
          <div id="contacts" align="center">
            <a href="https://www.instagram.com/_philzpng_/"><img id="icons" src="icons/instagram.png" alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/philip-z/"><img id="icons" src="icons/linkedin.png" alt="LinkedIn" /></a>
            <a href="https://github.com/ImNotMee"><img id="icons" src="icons/GitHub.png" alt="GitHub" /></a>
          </div>
          <div id="copyright">
            <p align="center" id="bio">{profileInfo.alumniTag}</p>
            <p align="center">
              <span id="colour">{profileInfo.name}</span> @ {profileInfo.copyrightYear}
            </p>
          </div>

          {page.type !== Welcome && (
            <div className="navbuttons">
              <div className="pad">
                <button className="button-style" value="me" onClick={this.updatePage}>About Me</button>
              </div>
              <div className="pad">
                <button className="button-style" value="projects" onClick={this.updatePage}>Projects</button>
              </div>
              <div className="pad">
                <button className="button-style" value="contact" onClick={() => window.location ='mailto:'}>Contact me</button>
              </div>
            </div>
          )}
        </div>

        <div className="right">
          {this.state.page}
        </div>
      </div>
    );
  }
}

export default Portfolio;
