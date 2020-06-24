import React, { Component} from 'react';
import './../projects.css';

class Projectbox extends Component {

  constructor(props) {
    super(props);
  }

  githubIcon() {
    if (this.props.url.length != 0) {
      if (this.props.title.includes("Website")) {
        return  <a href={this.props.url}><img id="icons" src="icons/link.png" alt="github url" /></a>
      }
      return  <a href={this.props.url}><img id="icons" src="icons/github.png" alt="github url" /></a>
    }
  }


  render() {
    const { title, text, pic, url} = this.props;
    return (
      <div className="flexcontainer">
          <div className="picture">
            <img id="display" src={pic}></img>
          </div>
          <div className="text">
            <h2 id="project-h2">
              {title}
              {this.githubIcon()}
            </h2>
            <p id="project-p">{text}</p>
          </div>
        </div>
    );
  }

}

export default Projectbox;
