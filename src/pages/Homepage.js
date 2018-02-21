import React from 'react';
import "../css/Homepage.css"
import image from "../images/andre-benz-257878.jpg"

class Homepage extends React.Component {

  render() {
    return (
      <section class="main-section" id="homepage">
        <div class="image-wrapper">
          <img onLoad={this.props.handleOnLoad} src={image} class="homepage-image" />
        </div>
        <div class="desktop-homepage-info">
          <h1 class="home homepage-h1" >Ryan Mascolo</h1>
          <p class="home homepage-p">Full stack web developer based out of Brooklyn</p>
          <p className="home homepage-icon-container" >
            <a href="https://www.linkedin.com/in/ryan-mascolo-10479962/" target="_blank"><span><i className="fab fa-linkedin" id="icon-homepage"></i></span></a>
              {/* <span id="icon-homepage"><i className="far fa-file-alt"></i></span> */}
            <a href="https://github.com/rjmascolo" target="_blank"><span><i className="fab fa-github" id="icon-homepage"></i></span></a>
            <a href="https://medium.com/@rjmascolo" target="_blank"><span><i class="fab fa-medium" id="icon-homepage"></i></span></a>
          </p>
        </div>
        <div class="mobile-homepage-info">
          <h1 class="mobile homepage-h1" >Ryan Mascolo</h1>
          <p class="mobile homepage-p">Full stack web developer based out of Brooklyn</p>
          <p className="mobile homepage-icon-container" >
            <a href="https://www.linkedin.com/in/ryan-mascolo-10479962/" target="_blank"><span><i className="fab fa-linkedin" id="icon-homepage"></i></span></a>
              {/* <span id="icon-homepage"><i className="far fa-file-alt"></i></span> */}
            <a href="https://github.com/rjmascolo" target="_blank"><span><i className="fab fa-github" id="icon-homepage"></i></span></a>
            <a href="https://medium.com/@rjmascolo" target="_blank"><span><i class="fab fa-medium" id="icon-homepage"></i></span></a>
          </p>
        </div>
      </section>
    )
  }
}

export default Homepage;
