import React, { Component } from "react";
import "./style.css";
// import Mobile from "./mobile"

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      navToggle: false
    };
  }

  toggleNav = () => {
   
    this.setState({
        navToggle: !this.state.navToggle
    })
  }

  componentDidMount() {}

  render() {
    return (
      <div className="nav-section">
        <header class={this.state.navToggle ? 'mobile-header' : 'header'}>
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
