import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div>
            <p className ="para">
                Now that you're here 🙂 <br/>
                Lets talk about what I've worked on. <br/>
                I'm gonna go deadpool and break the fourth wall. <br/>
                You're looking at my first project. <br/>
                It's super minimalistic. 
                There's no toolbars only text and interesting buttons <br/>
                I built this project using React.js. <br/>
                I learned React as a Bootcamper with Bits of Good <br/>
                I learned the ins and outs of Front-End Web Development <br/>
                Though I could've built a static website using really any framerwork <br/>
                I wanted to really flex my knowledge of <a href="https://reactjs.org/"> React </a>
                <br/>
            </p>
            <p className = "para">
                    <a href = "/" class = "button6"> Return to the beginning 😀 </a>
                    <Link to = "/projectshomepage" class = "button6"> Back to the Projects😀 </Link>            </p>
        </div>
    );
}

export default Projects