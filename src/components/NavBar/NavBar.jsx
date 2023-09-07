import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className='navitems'>
                <ul>
                    <li>
                        <Link to="/home" className='nav-home'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='nav-about'>About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className='nav-projects'>Projects</Link>
                    </li>
                    <li>
                        <a href="#contact" className='nav-contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

