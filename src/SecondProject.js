import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function SecondProject() {
    return (
        <div>
            <p className = "para">
                Welcome to my second project <br/>
                So the current cool kitchen gadget is Air Fryers. <br/>
                And with any cool thing they are expensive <br/>
                I could just sit there and watch the price everday <br/>
                But whats even better is a python webscraper <br/>
                a webscraper that monitors the price and lets me <br/>
                when the price drops. This is my current <br/>
                summer project. 
            </p>
            <p className = "para">
                <a href = "/projectshomepage" class = "button6"> Back to the Projects😀 </a>
                <a href = "/" class = "button6"> Square One😀 </a>
            </p>
        </div>
    )
}
export default SecondProject