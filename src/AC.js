import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function AC() {
    return (
        <div>
            <p className = "para">
                In my quest to make something I made a calculator in Android Studio <br/>
                for the google play store. its a basic calculator that conducts operations <br/>
                between two numbers. Through this I learned how to apply my Java skills to creating <br/>
                an android application, I also learned how to deploy and release an application to the <br/>
                google play store <br/>
            </p>
            <p className = "para">
            <a href = "/ProjectsHomepage" class = "button6"> Back to the Projects😀 </a>                <a href = "/" class = "button6"> Go home! </a>
            </p>
        </div>
    )
}
export default AC