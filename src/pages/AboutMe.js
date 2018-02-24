import React from 'react';
import "../css/AboutMe.css"

class AboutMe extends React.Component {

  render() {
    return (
      <section className="about-section" id="about-section">
          <h1 className="about-header">About Me</h1>
          <p className="about-content">
            Full stack web developer based out of NYC. Previously, I was working for the nonprofit,
            truth, in Washington DC, where I was introduced to the world of web development
            while project managing the recreation of my company’s website. Seeking to learn more,
            I enrolled in Flatiron School where I learned Javascript and Ruby and libraries like Ruby on 
            Rails and React. I am quick learner, and continuously exploring new technologies
            to expand my knowledge.</p>
      </section>
    )
  }
}

export default AboutMe;
