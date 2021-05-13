import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import logo from "../../media/Blue-Heron-Blue.png"
import React, { Component } from 'react';
import './style.css';
import heroImg from "../../media/sand-beach.png"
import {
    ThemeContextConsumer,
    ThemeContextProvider,
  } from "../../utils/themeContext";
  require("dotenv").config();

export default class LoginScreen extends Component {
    static contextType = ThemeContextConsumer;
    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
            status: "top",
            isMobile: false,
           height: '100vh',
           overflowHidden: true
        };
        this.passwordRef = React.createRef();
    }

    componentDidMount() {

this.fixOverflow();


        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 120) {
            if (this.state.status !== "bgChanged") {
              this.setState({ status: "bgChanged" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });



      }


      fixOverflow = () => {
        console.log("fixing overflow")

        let userStorageEmail = sessionStorage.getItem("isLoggedIn")

        if (userStorageEmail) {
          console.log(userStorageEmail, "got it")
          this.setState({
            overflowHidden: false})
          document.getElementsByTagName('body')[0].style.overflowY='unset';
          return;
        }

        // console.log(this.state.overflowHidden)
    if (this.state.overflowHidden) {
      document.getElementsByTagName('body')[0].style.overflowY='hidden';
    } else {
      document.getElementsByTagName('body')[0].style.overflowY='unset';
    }
        this.setState({overflowHidden: !this.state.overflowHidden})
      }


      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }


      handleLogin = (e) => {
          e.preventDefault();
        const ourContext = this.context;
        let password = this.passwordRef.current.value;
console.log(password)
        if (password === process.env.REACT_APP_PASS) {
ourContext.loginUser();
this.fixOverflow();
        }
        else {
            alert('incorrect password')
        }

      }
      render() {
        return (
          <div className="login-screen">
            {/* <div className="cta-nav-btn">
              <a href="/contact">
                <button className="contact-btn-link">Contact us</button>
              </a>
            </div> */}
            <div>
              <div sm={12} md={12} className="home-img" style={{
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
                position: `relative`,
                height:'100vh'
              }}>
                <img className="hero-logo login" src={logo}></img>
           
                <br></br>
                <p className="action-button primaryTextColor">Coming August 2021</p>
                <form onSubmit={this.handleLogin} className="login-form">
                    <input  type="text" ref={this.passwordRef} type="password" placeholder="enter password"></input>
                    <button>Sign In</button>
                </form>
              </div>
            </div>
          </div>
        )
      }
    }