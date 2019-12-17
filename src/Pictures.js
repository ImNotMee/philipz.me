import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as a from "./backend/scraper.js";

class Pictures extends Component {
  constructor() {
    super();
    this.state = { pictures: [], followers: "" };
  }

  componentDidMount() {
    a.test().then(res => {
      this.setState({
          pictures: res
        })
    });
    a.followers().then(res =>{
      this.setState({
        followers: res
      })
    });
  }

  render() {
    const a = this.state.pictures;
    const b = this.state.followers;
    return (
      <div>
        {a.map(d =>
          <div id="right">
            <img id="pics" src={d.display_url}></img>
            <p id="t"><span id="ka">Caption:</span> {d.text}</p>
        </div>)}
      </div>
    )}
}

export default Pictures;
