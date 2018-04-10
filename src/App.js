import React, { Component } from 'react';
import './App.css';
import './mobile-site.css';
import NavBar from './NavBar'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

class App extends Component {

  state = {
    currentPosition:'home',
    divHeights: {
      homepageHeight: 0,
      aboutHeight: 0,
      skillsHeight: 0,
      projectsHeight: 0
    },
    windowWidthHeight:0
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.getDivCoordinates)
      this.getWindowSize()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getWindowSize = () => {
    const windowWidth = window.innerWidth
    console.log(windowWidth, windowWidth/1.5006321112515804)
    this.setState({windowWidthHeight: {
      width: windowWidth,
      height: windowWidth/1.5006321112515804
    }
  })
  }

  getDivCoordinates = () => {
    if(document.querySelector('#homepage')){
      var navBarHeight = document.querySelector('.nav-ul').clientHeight
      var homepageHeight = document.querySelector('#homepage').clientHeight
      var aboutHeight = document.querySelector('#about-section').clientHeight
      var skillsHeight = document.querySelector('#skills').clientHeight
      var projectsHeight = document.querySelector('#projects').clientHeight
      this.setState({
        divHeights: {
          navBar: navBarHeight,
          homepageHeight: homepageHeight,
          aboutHeight: aboutHeight,
          skillsHeight: skillsHeight,
          projectsHeight: projectsHeight
        }
      })
    }
  }

  handleOnLoad = (event) => {
    this.getDivCoordinates()
    document.getElementsByClassName('triangle-topleft')[0].className = 'goLeft triangle-topleft';
    document.getElementsByClassName('triangle-bottomright')[0].className = 'goRight triangle-bottomright'
  }

  handleScroll = (event) => {
    const scroll = document.documentElement.scrollTop

    const currentDivs = this.state.divHeights
    const homeAboutHeight = currentDivs.homepageHeight + currentDivs.aboutHeight
    const homeAboutSkillsHeight = homeAboutHeight + currentDivs.skillsHeight
    if (scroll >= 0 && scroll < currentDivs.homepageHeight) {
      this.setState({currentPosition:'home'})
    }else if(scroll >= currentDivs.homepageHeight && scroll < homeAboutHeight){
      this.setState({currentPosition:'about-me'})
    }else if(scroll >= homeAboutHeight && scroll < homeAboutSkillsHeight ){
      this.setState({currentPosition:'skills'})
    } else if(scroll >= homeAboutSkillsHeight){
      this.setState({currentPosition:'projects'})
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar currentPosition={this.state.currentPosition} />
        <Homepage
          handleOnLoad={this.handleOnLoad}
          windowWidthHeight={this.state.windowWidthHeight}
         />
        <AboutMe />
        <Skills />
        <Projects />
        {/* <Experience /> */}
      </div>
    );
  }
}

export default App;
