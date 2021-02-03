import React, { Component } from "react";
//import * as a from "../backend/scraper.js";
const NUM_PAGE = 10;
// const buttonStyle = {
//   margin: 15,
// };

class Pictures extends Component {
  constructor() {
    super();
    this.state = { pictures: [], count: NUM_PAGE , prev: 0};
  }

  // componentDidMount() {
  //   a.pictures().then(res => {
  //     this.setState({
  //         pictures: res
  //       })
  //   });
  // }

  increase() {
    if (this.state.count < this.state.pictures.length) {
      this.setState({
        prev: this.state.count,
        count: this.state.count + NUM_PAGE
      });
    }
  };

  decrease() {
    if (this.state.prev === 0) {
      this.setState({
        prev: 0,
        count: NUM_PAGE
      })
    }
    else {
      this.setState({
        prev: this.state.prev - NUM_PAGE,
        count: this.state.count - NUM_PAGE
      })
    }
  }

  // render() {
  //   const a = this.state.pictures.slice(this.state.prev,this.state.count);
  //   return (
  //     <div className="right">
  //       {a.map(d =>
  //         <div>
  //           <img id="pics" src={d.display_url} alt=""></img>
  //           <p id="tee"><span id="colour"></span> {d.text}</p>
  //       </div>)}
  //       <button className="button-style" style={buttonStyle} onClick={this.decrease.bind(this)}>Prev</button>
  //       <button className="button-style" style={buttonStyle} onClick={this.increase.bind(this)}>Next</button>
  //     </div>
  //   )}
  render() {
    return(
      <h1>API deprecated, working on a new version.</h1>
    );
  }
}

export default Pictures;
