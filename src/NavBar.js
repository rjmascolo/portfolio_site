import React from 'react';
import "./css/NavBar.css"
import './mobile-site.css';

class NavBar extends React.Component {

  render() {
    return (
          <ul className="nav-ul">
  	         <li className={this.props.currentPosition === "home" ? "nav-li active": "nav-li"}><a className="nav-links" href="#homepage"><span className="mobile-block"><i className="material-icons icon" >home</i></span><span id="nav-text">Home</span></a></li>
  	         <li className={this.props.currentPosition === "about-me" ? "nav-li active": "nav-li"}><a className="nav-links" href="#about-section"><span className="mobile-block"><i className="material-icons icon" >person</i></span><span id="nav-text">About Me</span></a></li>
             <li className={this.props.currentPosition === "skills" ? "nav-li active": "nav-li"}><a className="nav-links" href="#skills"><span className="mobile-block"><i className="material-icons icon" >code</i></span><span id="nav-text">Skills</span></a></li>
  	         <li className={this.props.currentPosition === "projects" ? "nav-li active": "nav-li"}><a className="nav-links" href="#projects"><span className="mobile-block"><i className="material-icons icon" >laptop</i></span><span id="nav-text">Projects</span></a></li>
  	         {/* <li class="nav-li"><a href="#experience"><i class="material-icons icon" >work</i><span id="nav-text">Experience</span></a></li> */}
          </ul>
    )
  }
}

export default NavBar;
