import React, { Component } from "react";
import labelInstructions from "../../media/labelinstructions.JPG"

import "./style.css";

export default class Cooking extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
      height: "100vh",
    };
  }

  componentDidMount() {
    let height = window.innerHeight + "px";
    console.log(height);

    this.setState({
      height: height,
    });
    window.addEventListener("resize", () => {
      let height = window.innerHeight + "px";
      console.log(height);
      this.setState({
        height: height,
      });
    });
  }

  render() {
    return (
      <div
        className="cooking-page"
        style={
          {
            // height: `20vh`, /* Fallback for browsers that do not support Custom Properties */
            // height: `${this.state.height}`
          }
        }
        >
        <div className="block-img water first" style={{}}></div>
        <div className="page-block cooking">
          <div className="block-content cooking first">
            {/* <h1>Water</h1> */}
            <p>
              Why does pasta taste so great at a restaurant? Because it’s
              handmade? Probably. Because it’s been cooked al dente? Hopefully.
              Because the noodles have been properly “seasoned”… definitely!
            </p>
            <p>
              Salt water is the secret ingredient in every great batch of pasta
              noodles, and we’ve brought the magic recipe to your kitchen.
              Simply twist and pour – no measuring or guesswork required – and
              you’re on your way to making pasta like a pro. From pesto to
              homemade marinara to simple butter noodles, Blue Heron Pasta Water
              ™ is the Simple Solution for Perfect Pasta!
            </p>
            <div>
              <img src={labelInstructions}></img>
            </div>
          </div>
          {/* <div className="scroll-block">
            <p>Scroll</p>
            <hr></hr>
          </div> */}
        </div>
      </div>
    );
  }
}
