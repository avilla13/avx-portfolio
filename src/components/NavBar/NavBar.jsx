import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className='navitems'>
                <ul>
                    <li>
                        <a href="#home" className='nav-home'>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='nav-about'>About</a>
                    </li>
                    <li>
                        <a href="#projects" className='nav-projects'>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className='nav-contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

