import React from 'react';
import { Icon } from 'react-materialize'
import "./css/NavBar.css"
import './mobile-site.css';

class NavBar extends React.Component {

  render() {
    return (
          <ul class="nav-ul">
  	         <li class={this.props.currentPosition === "home" ? "nav-li active": "nav-li"}><a class="nav-links" href="#homepage"><span class="mobile-block"><i class="material-icons icon" >home</i></span><span id="nav-text">Home</span></a></li>
  	         <li class={this.props.currentPosition === "about-me" ? "nav-li active": "nav-li"}><a class="nav-links" href="#about-section"><span class="mobile-block"><i class="material-icons icon" >person</i></span><span id="nav-text">About Me</span></a></li>
             <li class={this.props.currentPosition === "skills" ? "nav-li active": "nav-li"}><a class="nav-links" href="#skills"><span class="mobile-block"><i class="material-icons icon" >code</i></span><span id="nav-text">Skills</span></a></li>
  	         <li class={this.props.currentPosition === "projects" ? "nav-li active": "nav-li"}><a class="nav-links" href="#projects"><span class="mobile-block"><i class="material-icons icon" >laptop</i></span><span id="nav-text">Projects</span></a></li>
  	         {/* <li class="nav-li"><a href="#experience"><i class="material-icons icon" >work</i><span id="nav-text">Experience</span></a></li> */}
          </ul>
    )
  }
}

export default NavBar;
