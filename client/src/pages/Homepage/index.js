import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
import blueLabel from "../../media/blue-label.png"
// import logo from './logo.svg';
import HomeHero from "../../components/HomeHero/index";
import './style.css';



export default class Homepage extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            isMobile: false,
           height: '100vh'
        };
    }

    componentDidMount() {
        let height = window.innerHeight + 'px';
        console.log(height)
  


        this.setState({
            height: height
        })
        window.addEventListener('resize', () => {
            let height = window.innerHeight + 'px';
            console.log(height)
            this.setState({
                height: height
            })
     
          });
    }



    render() {
        return (
            <div className="homepage-content" style={{
                // height: `20vh`, /* Fallback for browsers that do not support Custom Properties */
                height: `${this.state.height}`
            }}>
                <HomeHero height={this.state.height}></HomeHero>
            <div className="home-blue-block" style={{ height:this.state.height}}>
                <div className="home-blue-block-content">
            <img src={blueLabel}></img>
            <p>It started at the beach. While pondering the chef’s adage that pasta water should taste “of the sea”, a stockpot of Atlantic seawater was fetched for the stove. </p>
                </div>
            </div>
            </div>
        )
    }
}