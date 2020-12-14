
import React, { Component } from 'react';

import './style.css';
// import profPic from "../../media/5.PNG"
import logo from "../../media/Blue-Heron-Blue.png"
import heroImg from "../../media/sand-beach.png"




export default class HomeHero extends Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }


  componentDidMount() {
 
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {





    return (
      <div className="inner">
        <div>
          <div className="home-img" style={{
            backgroundImage: `url(${heroImg})`,
            backgroundColor: `#F9F8F0`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            height: `${this.props.height}`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
          }}>
            <img className="hero-logo" src={logo}></img>
       

            <br></br>
            <p style={{color:'#0e3b62'}} className="action-button">February 2021</p>
          </div>
        </div>
      </div>
    )

  }
}