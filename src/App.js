import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pictures from './Pictures';

function App() {
  return (
    <div className="App">
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

        <div id="copyright">
            <p align="center" id="bio">I am a student who has a hobby of taking interesting pictures.</p>
            <p align="center">Philip @ 2019</p>
        </div>
    </div>
    <Pictures />
    </div>
  );
}

export default App;
