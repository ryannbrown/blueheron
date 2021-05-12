
import React, { Component } from 'react';

import './style.css';



export default class FrequentlyAsked extends Component {

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
            <div className="faq-page" style={{
                // height: `20vh`, /* Fallback for browsers that do not support Custom Properties */
                // height: `${this.state.height}`
            }}>
            <div className="faq-page-block">
            <div className="faq-block-img water first" style={{}}></div>
                <div className="faq-block-content">
                <h1>What is Pasta Water ™?</h1>
                <p>Blue Heron Pasta Water ™ is a proprietary formula of pre-salted water for boiling pasta noodles of every kind! It’s the secret step to making restaurant-quality noodles at home, and we’ve taken the measuring and guesswork out of it. Just twist, pour and boil, and you’re using the “Simple Solution for Perfect Pasta!”.</p>
                <h1>Why would I use Pasta Water ™ instead of just going to the sink?</h1>
                <p>Consistency, flavor and purity! Once you’ve tried your favorite recipes with properly seasoned noodles, you’ll never go back to eyeing it up. A little salt is never enough, and you can’t take “too much salt” out of your pasta. We’ve done the work for you to get it right every time.</p>
                <h1>How pure is your water?</h1>
                <img alt="Salt Bowl Photo"></img>
                <p>Our source water undergoes treatment with UV light and fine-micron filtration to remove impurities. It’s then flash-pasteurized and filtered again prior to bottling. By measured parts-per-million (ppm), it meets or exceeds the purity of most bottled drinking waters</p>
                <h1>How much pasta will one 3L bottle of Pasta Water ™ cook?</h1>
                <p>One 3L bottle is intended to cook 8-12 oz. of dried pasta. Pasta roughly doubles its dried weight while cooking, so the yield is (four) 4-6 oz. cooked servings. If you’re cooking an entire box or bag (1lb. or more), simply add enough Pasta Water ™ to keep covered by 2”-3” throughout cooking. A cooked 5 oz. serving looks like this:</p>
                <img alt="Single-Serving Photo"></img>
                <img alt="Four-Bowl Photo Lineup"></img>
                <h1>Does Blue Heron Pasta Water ™ work with non-traditional pastas like Veggie and Gluten-Free?</h1>
                <p>Yes! Our tasting panel actually found equal (or more) flavor impact with non-traditional pastas. Keep reading… the numbers below back up what our palates told us.</p>
                <h1> I’m not drinking Pasta Water ™, so the Nutrition Facts are confusing. How much sodium is actually in my pasta?</h1>
                <p>We wondered the same thing! We sent batches off to an FDA-certified lab to get the numbers for 5 oz. servings, and here’s the takeaway: Absorption will vary by brand, but roughly 450mg/serving for Traditional and Gluten-Free and 570mg/serving of Veggie Pasta (The U.S. government’s Dietary Guidelines for Americans 2020-2025 recommended daily sodium allowance is 2300mg).</p>
                <h1>Can I use Pasta Water ™ with homemade pastas and sauces?</h1>
                <p>That level of commitment deserves perfectly seasoned noodles! We suggest tasting and testing. You may need to adjust added salt to  homemade pestos or other sauces using high-sodium ingredients like olives or anchovies. Blue Heron Pasta Water ™ will give Nanna’s favorite recipe the showcase it deserves with consistently delicious pasta noodles</p>
                <h1>Can I cook ravioli, gnocchi and tortellini using Pasta Water ™?</h1>
                <p>Yes… and make extra, because you’ll be popping them like snacks! Pasta Water ™ is an exceptional cooking bath for wrapped pastas (and gnocchi dumplings). Just as with dry pasta, be careful with any salt additions to your sauces. You can always add more salt, but you can’t take it away!</p>
                <h1>When does Pasta Water ™ not work well?</h1>
                <p>Pasta Water ™ is very well-suited to most commercial sauces, but packaged cheese sauces usually contain plenty of sodium on their own. Just about any boxed version of macaroni and cheese, shells and cheese, etc. is not recommended with noodles cooked in Pasta Water ™.</p>
                <h1>Is Pasta Water ™ safe to drink?</h1>
                <p>It’s a little like getting seawater in your mouth. It’s not harmful, but you probably won’t take a second sip! Blue Heron Pasta Water ™ is for cooking only and is not intended to be a hydrating beverage.</p>
                <h1>What is the shelf life of Pasta Water ™?</h1>
                <p>A minimum of two years from the bottling printed on the cap, if kept sealed and stored at room temperature. For practical purposes, it can be treated like bottled drinking water. It will not “go bad” and does not require refrigeration once opened.</p>

                </div>
            <div className="scroll-block">
                <p>Scroll</p>
                <hr></hr>
            </div>
            </div>
  
            </div>
        )
    }
}