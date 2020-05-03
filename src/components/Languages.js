import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
class Languages extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render(prop) {
    return (
      <div>
        <p>Python</p>
        <ProgressBar now={90} />
        <p>Java</p>
        <ProgressBar now={85} />
        <p>HTML/CSS</p>
        <ProgressBar now={70} />
        <p>SQL</p>
        <ProgressBar now={70} />
        <p>Bash</p>
        <ProgressBar now={60} />
        <p>JavaScript</p>
        <ProgressBar now={50} />
        <p>Ruby</p>
        <ProgressBar now={40} />
        <p>C</p>
        <ProgressBar now={40} />
      </div>
    )}
}

export default Languages;
