import React, { Component } from "react";
import "./style.css";
var _ = require("lodash");
// import Mobile from "./mobile"

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      mobileNavToggle: false
    };
  }

  toggleNav = () => {
   if (this.state.mobileNavToggle) {
     this.setState({
         mobileNavToggle: false
     })
   } else if (!this.state.mobileNavToggle) {
    this.setState({
      mobileNavToggle: true
  })
   }
  }

  componentDidMount() {}

  componentDidUpdate() {
    window.addEventListener(
      "resize",
      _.debounce(() => {
        if (window.innerWidth > 750) {
          this.setState({
            mobileNavToggle: false,
          });
          document.getElementById("navvy-bar").className = "header";
          document.getElementById("menu-toggle").checked = false
        } 
        else if (window.innerWidth < 750) {
          if (this.state.mobileNavToggle) {
            document.getElementById("menu-toggle").checked = true;
          }
        }
          
      }, 400)
    );
  }

  render() {
    return (
      <div className="nav-section">
      <header id="navvy-bar" class={this.state.mobileNavToggle ? 'mobile-header' : 'header'}>
          <nav>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Cooking</a>
              </li>
              <li>
                <a href="#">Instructions</a>
              </li>
              <li>
                <a href="#">Find</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Connect</a>
              </li>
            </ul>
          </nav>
        </header>
        <input type="checkbox" class="menu-toggle" id="menu-toggle" onClick={this.toggleNav} />
        <div class="mobile-bar">
          <label for="menu-toggle" class="menu-icon">
            <span></span>
          </label>
        </div>
      </div>
    );
  }
}
