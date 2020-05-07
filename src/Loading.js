import React, { Component} from 'react';
import logo from './logo.svg';
import './loading.css';
import {Link} from 'react-router-dom';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="center">
        <div id="icon">Philip <span id="icon-2">Zhang</span></div>
          <div className="links">
            <Link to='/Photography'id="la">
                  <button type="button" className="button-style"><span>Photography</span></button>
            </Link>
            <Link to='/index' id="lb">
                  <button type="button" className="button-style"><span>About Me</span></button>
            </Link>
            <Link to='/projects'id="lc">
                  <button type="button" className="button-style"><span>Projects</span></button>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default Loading;
