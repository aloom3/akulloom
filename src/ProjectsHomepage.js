import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ProjectsHomepage() {
    return(
        <div>
            <nav>
            <ul>
                <ul> 
                    <Link to = "/projects"> Akul's Site </Link>
                </ul>
                <ul>
                    <Link to = "/secondproject"> Airfryer Scraper </Link>
                </ul>
                <ul>
                    <Link to = "/ac"> My Calculator App </Link>
                </ul>
                <ul>
                    <Link to = "/rc"> The React Calculator </Link>
                </ul>
            </ul>
            </nav>
            <br></br>
            <p className='para'> Choose a good project and check it out! <br/>
            <a href = "/"> Return to the beginning! </a> </p>
        </div>
    );
}
export default ProjectsHomepage