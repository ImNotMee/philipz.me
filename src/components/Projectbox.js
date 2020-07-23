import React, { Component} from 'react';
import './../projects.css';

class Projectbox extends Component {

  githubIcon(url) {
    if (this.props.url.length !== 0) {
      if (this.props.title.includes("Website")) {
        return <a href={url}><img id="githubIcon" src="icons/link.png" alt="" /></a>
      }
      else {
        return  <a href={url}><img id="githubIcon" src="icons/GitHub-black.png" alt="" /></a>
      }
    }
  }

  render() {
    const { title, text, pic, url} = this.props;
    return (
      <div className="flexcontainer">
          <div className="picture">
            <img id="display" src={pic} alt=""></img>
          </div>
          <div className="text">
            <h2 id="project-h2">
              {title}
              {this.githubIcon(url)}
            </h2>
            <p id="project-p">{text}</p>
          </div>
        </div>
    );
  }

}

export default Projectbox;
