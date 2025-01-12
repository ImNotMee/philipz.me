import React, { Component } from "react";
//import * as a from "../services/scraper.js";

const NUM_PAGE = 10;
const BUTTONSTYLE = {
  margin: 15,
};

class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], count: NUM_PAGE, prev: 0 };
  }

  /*async componentDidMount() {
    try {
      const res = await a.scrapeInstagramPosts();
      this.setState({
        pictures: res,
      });
    } catch (error) {
      console.error("Error fetching pictures:", error);
    }
  }*/

  increase() {
    if (this.state.count < this.state.pictures.length) {
      this.setState((prevState) => ({
        prev: prevState.count,
        count: prevState.count + NUM_PAGE,
      }));
    }
  }

  decrease() {
    if (this.state.prev === 0) {
      this.setState({
        prev: 0,
        count: NUM_PAGE,
      });
    } else {
      this.setState((prevState) => ({
        prev: prevState.prev - NUM_PAGE,
        count: prevState.count - NUM_PAGE,
      }));
    }
  }

  render() {
    const display = this.state.pictures.slice(this.state.prev, this.state.count);
    return (
      <div className="right">
        {display.map((d, index) => (
          <div key={index}>
            <img id="pics" src={d.imageUrl} alt="" />
            <p id="tee"><span id="colour"></span> {d.caption}</p>
          </div>
        ))}
        <button
          className="button-style"
          style={BUTTONSTYLE}
          onClick={this.decrease.bind(this)}
          disabled={this.state.prev === 0}
        >
          Prev
        </button>
        <button
          className="button-style"
          style={BUTTONSTYLE}
          onClick={this.increase.bind(this)}
          disabled={this.state.count >= this.state.pictures.length}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pictures;
