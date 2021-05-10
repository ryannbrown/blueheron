import React, { Component } from "react";
import "./style.css";
import birdLogo from "../../media/logo.png"
import {NavLink} from "react-router-dom"
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
        <div className="nav-brand">
          <img src={birdLogo}></img>
        </div>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="active" exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/cooking">Cooking</NavLink>
              </li>
              {/* <li>
                <NavLink activeClassName="active" to="/instructions">Instructions</NavLink>
              </li> */}
              <li>
                <NavLink activeClassName="active" to="/faq">FAQ</NavLink>
              </li>
              {/* <li>
                <NavLink activeClassName="active" to="/find">Find</NavLink>
              </li> */}
              <li>
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
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
