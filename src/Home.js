import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className = 'wrap'>
            <div className = 'inside'> 
                <nav>
                    <ul>
                        <ul> 
                            <Link to = "/homepage"> Home </Link>
                        </ul>
                        <ul>
                            <Link to = "/AboutMe"> About me </Link>
                        </ul>
                        <ul>
                            <Link to = "/projectshomepage"> Projects </Link>
                        </ul>
                        {/* <ul>
                            <Link to = "/Contact"> Contact Me </Link>
                        </ul> */}
                        <ul>
                            <a href = "https://github.com/aloom3"> Github </a>
                        </ul>
                    </ul>
                </nav>
                <p className = 'para'> Hello! I am Akul 
                😀! 
                </p>
            </div>
        </div>

    );
}
export default Home;