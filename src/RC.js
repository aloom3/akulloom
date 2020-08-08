import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function RC() {
    return (
        <div>
            <p className = "para">
                In order to learn more about React and the idea of state I made a React calculator <br/>
                Through I learned about react state and the idea of props. The calculator successfully <br/>
                computes values between various numbers and theres some casual css on top of it to <br/>
                make it look good. Go check it out <a href = "https://quirky-mccarthy-a8491b.netlify.app/"> here. </a>

            </p>
            <p className = "para">
            <Link to = "/projectshomepage" class = "button6"> Back to the Projects😀 </Link>                <a href = "/" class = "button6"> Go home! </a>
            </p>
        </div>
    )
}
export default RC