import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function homepage() {
    return (
        <div className = 'wrap'>
            <div className = 'inside'>
                <p className = 'para'>
                I am a rising second year at the Georgia Institute of Technology🐝. <br></br>
                At the institute I am majoring in Computer Science💻 <br></br>
                with a concentration in <a href="https://www.cc.gatech.edu/intelligence">🤖Intelligence🤖</a> and
                 <a href = "https://www.cc.gatech.edu/information-internetworks"> 🌌Info-Internetworks🌌</a> <br></br>
                Along with my classes, <br></br> I am an 👨‍🏫 Undergraduate TA for Intro to Object Oriented Programming. <br></br>I will also be serving as a junior developer 
                for <a href = "https://bitsofgood.org/"> Bits of Good </a> <br></br>a club that combines CS and Social Good. <br></br>
                Finally, I am a part of a Cyber-Forensics Laboratory <br></br> focused on reverse engineering malware and viruses. 
                 </p>
                 <a href="https://www.linkedin.com/in/akul-loomba-3b487418a/" class ="button6">Linkedin</a>
                 <Link to = "/" class = "button6"> Home </Link>
            </div>
        </div>
    );
}
export default homepage;