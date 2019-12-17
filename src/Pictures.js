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
      <div id="right">
        <p>Current Followers: {b}</p>
        {a.map(d =><p>
          <img id="pics" src={d.display_url}></img>
          <br></br>
          {d.text}</p>)}
      </div>
    )}
}

export default Pictures;
