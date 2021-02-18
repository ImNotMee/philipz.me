import React, { Component} from 'react';
import './Portfolio.css';
import Projects from '../Project/Projects.js';
import Main from '../Main/Main.js'
import Pictures from '../components/Pictures.js';

class Portfolio extends Component {
 
  state = {
    page: <Main />
  }

  updatePage(e) {
    let temp = "";
    switch(e.target.value) {
      case "photo":
        temp = <Pictures />
        break;
      case "me":
        temp = <Main />
        break;
      case "projects":
        temp = <Projects/>
        break;
      default:
        temp = <Main />
    }
    this.setState({
      page: temp
    }); 
  }

  render() {
    return (
      <div className="Portfolio">
      <div className="left">
          <div id="logo">
              <img id="logo" src="icons/logo.jpg" alt="" />
          </div>
          <div id="contacts" align= "center">
              <a href="https://www.instagram.com/_philzpng_/"><img id="icons" src="icons/instagram.png" alt="" /></a>
              <a href="https://www.linkedin.com/in/philip-z/"><img id="icons" src="icons/linkedin.png" alt="" /></a>
              <a href="https://github.com/ImNotMee"><img id="icons" src="icons/GitHub.png" alt=""/></a>
          </div>
          <div id="copyright">
              <p align="center" id="bio">A UofT Student</p>
              <p align="center"><span id="colour">Philip</span> @ 2021</p>
          </div>
          <div className="navbuttons">
            <div className="pad">
              <button className="button-style" onClick={this.updatePage.bind(this)} value="me">About Me</button>
            </div>
            <div className="pad">
              <button className="button-style" onClick={this.updatePage.bind(this)} value="photo">Photography</button>
            </div>
            <div className="pad">
              <button className="button-style" onClick={this.updatePage.bind(this)} value="projects">Projects</button>
            </div>
  
          </div>
      </div>
      <div className="right">
        {this.state.page}
      </div>
      </div>
    );
  }
}

export default Portfolio;
