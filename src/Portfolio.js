import React, { Component} from 'react';
import './Portfolio.css';
import Pictures from './components/Pictures.js';
import Followers from './components/Follower.js';

class Portfolio extends Component {

  render() {
    return (
      <div className="Portfolio">
      <div class="top"></div>
      <div class="left">
          <div id="logo">
              <img id="logo" src="icons/logo.jpg" alt="" />
          </div>
          <div id="contacts" align= "center">
              <a href="https://www.instagram.com/_philzpng_/"><img id="icons" src="icons/instagram.png" alt="" /></a>
              <a href="https://www.linkedin.com/in/philip-zhang-3b7246127"><img id="icons" src="icons/linkedin.png" alt="" /></a>
              <a href="https://github.com/ImNotMee"><img id="icons" src="icons/GitHub.png" alt=""/></a>
          </div>
          <Followers />
          <div id="copyright">
              <p align="center" id="bio">A UofT student</p>
              <p align="center"><span id="colour">Philip</span> @ 2020</p>
          </div>
      </div>
      <Pictures />
      </div>
    );
  }
}

export default Portfolio;
