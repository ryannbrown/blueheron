import React, { Component } from "react";

import "./style.css";
// import profPic from "../../media/5.PNG"
import logo from "../../media/Blue-Heron-Blue.png";
import heroImg from "../../media/sand-beach.png";
import fbLogo from "../../media/icons/facebook.svg";
import instaLogo from "../../media/icons/instagram.svg";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div>
            <img src={logo}></img>
          </div>
          <div className="contact-info">
            <p>Blue Heron Culinary</p>
            <p>Raleigh, NC 27622 </p>
            <p>blueheronculinary.com</p>
            {/* <p>Stirred up by Just Soup</p> */}
            <div id="DMCA-badge">
              <div
                className="dm-1 dm-1-b"
                style={{ left: "0px; background-color: #0E3B62" }}
              >
                <a href="https://www.dmca.com/" title="DMCA">
                  DMCA
                </a>
              </div>

              <div
                className="dm-2 dm-2-b"
                style={{ backgroundColor: "rgb(117, 147, 174)" }}
              >
                <a
                  href="http://www.dmca.com/Protection/Status.aspx?ID=bd2578b4-44af-450a-828f-205ae383380b"
                  title="DMCA"
                >
                  PROTECTED
                </a>
              </div>
            </div>
          </div>
          <div>
            <p>Stay in touch!</p>
            <form>
              <input placeholder="Enter Email"></input>
              <button>Subscribe</button>
            </form>
            <div className="social-wrapper">
              <a href="/">
                <img src={instaLogo}></img>
              </a>
              <a href="/">
                <img src={fbLogo}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
