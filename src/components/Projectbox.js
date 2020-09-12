import React, { Component} from 'react';
import '../Project/projects.css';

class Projectbox extends Component {

  getIcons(type) {
      if (type === "u" && this.props.url.length > 0) {
        return <a href={this.props.url}><img id="githubIcon" src="icons/GitHub-black.png" alt="" /></a>
      }
      else if (type === "l" && this.props.link.length > 0) {
        return  <a href={this.props.link}><img id="githubIcon" src="icons/link.png" alt="" /></a>
      }
  }

  render() {
    const { title, text, pic, link, url} = this.props;
    return (
      <div className="flexcontainer">
          <div className="picture">
            <img id="display" src={pic} alt=""></img>
          </div>
          <div className="text">
            <h2 id="project-h2">
              {title}
              {this.getIcons("u")}
              {this.getIcons("l")}
            </h2>
            <p id="project-p">
            {text}
            </p>
          </div>
        </div>
    );
  }

}

export default Projectbox;
