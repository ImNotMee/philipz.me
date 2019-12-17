import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as a from "./scraper.js";

class Pictures extends Component {
  constructor() {
    super();
    this.state = { pictures: [] };
  }

  componentDidMount() {
    a.test().then(res => {
      this.setState({
          pictures:  res
        })
    });
  }

  render() {
    const a = this.state.pictures;
    //for (var i = 0; i < this.state.pictures.length; i++) {
    //  console.log(a[i].display_url);
    //}
    return (
      <div id="right">
        //{a.map(d => <img id="pics" src={d.display_url}></img>)}
        {a.map(b=> <p>{b.likes}</p>)}
      </div>
    )}
}

export default Pictures;
