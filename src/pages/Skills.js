import React from 'react';
import "../css/Skills.css"
// import image from "../images/hypnotize.png"

class Skills extends React.Component {

  render() {
    return (
      <section className="skills-section" id="skills">
          <h2 className="skills-header section-header">Skills</h2>
          <div className="flex">
            <div className="skills-list">
              <h2 className="skills-header" >Languages</h2>
              <ul className="skill-details">
                <li>Javascript</li>
                <li>Ruby</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>JSON</li>
              </ul>
            </div>

            <div className="skills-list">
              <h2 className="skills-header" >Frameworks</h2>
              <ul className="skill-details">
                <li>Ruby On Rails</li>
                <li>React</li>
                <li>Redux</li>
                <li>Sinatra</li>
              </ul>
            </div>

            <div className="skills-list">
              <h2 className="skills-header">Tools</h2>
              <ul className="skill-details">
                <li>Git & Github</li>
                <li>Chrome DevTools</li>
                <li>Postman</li>
                <li>Semantic UI</li>
                <li>Bootstrap</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
      </section>
    )
  }
}

export default Skills;
