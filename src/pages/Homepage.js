import React from 'react';
import "../css/Homepage.css"
import image from "../images/andre-benz-257878.jpg"

class Homepage extends React.Component {

  render() {

    const leftStyle = {
        borderTop: `${this.props.windowWidthHeight.height}px solid black`,
        borderRight: `${this.props.windowWidthHeight.width}px solid transparent`
    };
    const rightStyle = {
        borderBottom: `${this.props.windowWidthHeight.height}px solid black`,
        borderLeft: `${this.props.windowWidthHeight.width+1}px solid transparent`
    };
    return (
      <section className="main-section" id="homepage">
        <div className="image-wrapper">
          <div class="triangle-topleft" style={leftStyle}></div>
          <div class="triangle-bottomright" style={rightStyle}></div>
          <img onLoad={this.props.handleOnLoad} src={image} className="homepage-image" />
        </div>
        <div className="desktop-homepage-info">
          <h1 className="home homepage-h1" >Ryan Mascolo</h1>
          <p className="home homepage-p">Full stack web developer based out of Brooklyn</p>
          <p className="home homepage-icon-container" >
            <a href="https://www.linkedin.com/in/ryan-mascolo-10479962/" target="_blank"><span><i className="fab fa-linkedin" id="icon-homepage"></i></span></a>
              {/* <span id="icon-homepage"><i className="far fa-file-alt"></i></span> */}
            <a href="https://github.com/rjmascolo" target="_blank"><span><i className="fab fa-github" id="icon-homepage"></i></span></a>
            <a href="https://medium.com/@rjmascolo" target="_blank"><span><i className="fab fa-medium" id="icon-homepage"></i></span></a>
          </p>
        </div>
        <div className="mobile-homepage-info">
          <h1 className="mobile homepage-h1" >Ryan Mascolo</h1>
          <p className="mobile homepage-p">Full stack web developer based out of Brooklyn</p>
          <p className="mobile homepage-icon-container" >
            <a href="https://www.linkedin.com/in/ryan-mascolo-10479962/" target="_blank"><span><i className="fab fa-linkedin" id="icon-homepage"></i></span></a>
              {/* <span id="icon-homepage"><i className="far fa-file-alt"></i></span> */}
            <a href="https://github.com/rjmascolo" target="_blank"><span><i className="fab fa-github" id="icon-homepage"></i></span></a>
            <a href="https://medium.com/@rjmascolo" target="_blank"><span><i className="fab fa-medium" id="icon-homepage"></i></span></a>
          </p>
        </div>
      </section>
    )
  }
}

export default Homepage;
