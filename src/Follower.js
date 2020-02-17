import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as a from "./backend/scraper.js";

class Follower extends Component {
  constructor() {
    super();
    this.state = { followers: "" };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <p><span id="colour">Current Followers:</span> {this.state.followers}</p>
      </div>
    )}
}

export default Follower;
