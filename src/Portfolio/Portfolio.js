import React, { Component} from 'react';
import './Portfolio.css';
import Projects from '../Project/Projects.js';
import Main from '../Main/Main.js'
import Pictures from '../components/Pictures.js';
import Follower from '../components/Follower';

class Portfolio extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      page: <Main />
    }
    this.updatePage = this.updatePage.bind(this);
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
              <p align="center" id="bio">An UofT Alumni</p>
              <p align="center"><span id="colour">Philip</span> @ 2022</p>
          </div>
          <div className="navbuttons">
            <div className="pad">
              <button className="button-style" value="me" onClick={this.updatePage}>About Me</button>
            </div>
            <div className="pad">
              <button className="button-style" value="projects" onClick={this.updatePage}>Projects</button>
            </div>
            <div className="pad">
              <button className="button-style" value="photo" onClick={this.updatePage}>Photo</button>
            </div>
            <div className="pad">
              <button className="button-style" value="contact" onClick={() => window.location ='mailto:philip.zhang@mailutoronto.ca'}>Contact me</button>
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
