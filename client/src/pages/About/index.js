
import React, { Component } from 'react';

import './style.css';



export default class About extends Component {

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
            <div className="about-page" style={{
                // height: `20vh`, /* Fallback for browsers that do not support Custom Properties */
                // height: `${this.state.height}`
            }}>
            <div className="about-page-block" style={{ height:this.state.height}}>
            <div className="about-block-img water first" style={{}}></div>
                <div className="about-block-content first">
                <h1>Water</h1>
                <p>Water isn’t just water. Regular tap water has impurities. Chlorine, mineral deposits and source quality all
impact flavor (and are absorbed by whatever is being cooked). Blue Heron Pasta Water ™ is treated with
UV light, pasteurized, double-filtered, and tested for absolute purity prior to bottling.</p>

                </div>
            <div className="scroll-block">
                <p>Scroll</p>
                <hr></hr>
            </div>
            </div>
            <div className="about-page-block" style={{ height:this.state.height}}>
                <div className="about-block-img salt" style={{}}></div>
                <div className="about-block-content">
                <h1>Salt</h1>
                <p>Sustainably harvested from Australia’s Southern Ocean, Blue Heron uses the world’s cleanest natural
salt in our Pasta Water ™. Born in pristine waters free of chemicals and pollutants, our salt is air-dried
and sorted down to individual grains by optical sensors for unsurpassed consistency and flavor.</p>
                {/* <p>It started at the beach. While pondering the chef’s adage that pasta water should taste “of the sea”, a stockpot of Atlantic seawater was fetched for the stove. </p>
                <p>Too briny on its own, we diluted it to an approximation of restaurant pasta water, and the clams dug that morning were paired with linguini in a meal in where the noodles sang the high notes.</p> */}
                </div>
            <div className="scroll-block-2">
       
                <hr></hr>
            </div>
            </div>
            {/* <div className="about-page-block" style={{ height:this.state.height}}>
                <div className="about-block-img" style={{}}></div>
                <div className="about-block-content">
                <h1>Cooking Traditions</h1>
                <p>In the conversation that followed, it became apparent that no one followed the same rules when cooking pasta. Most used too little salt to season their noodles… one used none at all!.</p>
                <p>Several wondered aloud why restaurant pasta tasted better, and a lengthy discourse on salinity and the cooking traditions of seafaring peoples followed. Without realizing it, the figurative Blue Heron egg had been laid at the dinner table.</p>
                </div>
            <div className="scroll-block-2">
            
                <hr></hr>
            </div>
            </div> */}
            {/* <div className="about-page-block" style={{ height:this.state.height}}>
                <div className="about-block-img" style={{}}></div>
                <div className="about-block-content">
                <h1>The Secret Weapon</h1>
                <p>After bringing in chefs and trained palates to fine-tune the recipe, the result is what we believe to be the ideal — and easiest-way to take the guesswork out of pasta water for the home cook.</p>
                <p>It’s designed to work with even the highest-sodium commercial sauces, but saline adds like anchovies and capers should be used sparingly. Homemade sauces that call for added salt should also be adjusted for taste. It is not recommended for boxes of mac-and-cheese! The sodium in most commercial cheese sauces is too much for Pasta Water ™.</p>
                <p>The chef’s secret weapon is now at your fingertips and is just a twist and pour away. It’s the simple solution for perfect pasta!</p>
                </div>
            <div className="scroll-block-2">
             
                <hr></hr>
            </div>
            </div> */}
            </div>
        )
    }
}