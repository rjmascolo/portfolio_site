import React from 'react';
import { Icon } from 'react-materialize'
import "../css/Skills.css"
// import image from "../images/hypnotize.png"

class Skills extends React.Component {

  render() {
    return (
      <section class="skills-section" id="skills">
          <h2 class="skills-header section-header">Skills</h2>
          <div class="flex">
            <div class="skills-list">
              <h2 class="skills-header" >Languages</h2>
              <ul class="skill-details">
                <li>Javascript</li>
                <li>Ruby</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>JSON</li>
              </ul>
            </div>

            <div class="skills-list">
              <h2 class="skills-header" >Frameworks</h2>
              <ul class="skill-details">
                <li>Ruby On Rails</li>
                <li>React</li>
                <li>Sinatra</li>
              </ul>
            </div>

            <div class="skills-list">
              <h2 class="skills-header">Tools</h2>
              <ul class="skill-details">
                <li>Git & Github</li>
                <li>Chrome DevTools</li>
                <li>Postman</li>
                <li>Semantic UI</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
      </section>
    )
  }
}

export default Skills;
