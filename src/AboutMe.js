import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <div>
            <p className = "para">
                Hi once again I'm Akul😁. <br/>
                You know about all the formal stuff <br/>
                but time for something more personal. <br/>
                besides school I love hanging with friends <br/>
                and exploring the <a href= "https://www.atlanta.net/things-to-do/"> city </a> <br/>
                Along with exploring I <br/>love to eat good food. I love finding new restaurants <br/>
                and trying new foods. When not exploring <br/> I enjoy watching tiktoks and Netflix
                <br/> documentaries. I also enjoy cooking in the kitchen <br/>
                whipping up the stirfry and cooking up tacos. <br/>
                Finally, I like comedy. I like making jokes <br/>
                and writing standup. <br/> The next step is doing an open mic.
                <br/> Now that you know more about me look at my <Link to="/Projects"> Projects</Link>
            </p>
            <p className = "para">
                <a href = "/" class = "button6"> Back Home 🏟 </a>
            </p>
        </div>
    );
}
export default AboutMe;