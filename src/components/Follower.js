import React, { Component } from "react";
import * as a from "../backend/scraper.js";

class Follower extends Component {
  constructor() {
    super();
    this.state = { followerCount : 0};
  }


  componentDidMount () {
    a.followers().then(res => {
      this.setState({
          followerCount: res
        })
    });
  }

  render() {
    return (
      <div>
      <p><span id="colour">Current Followers: </span>{this.state.followerCount}</p>
      </div>
    )}
}

export default Follower;
