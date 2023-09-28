import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

export default function Navbar() {
    const [openNav, setOpenNav] = useState(true);

    const toggleSidebar = () => {
        setOpenNav(!openNav);
    };

    return (
        <nav>
            <button onClick={toggleSidebar} className='navtoggle'>Toggle</button>
            <div className={`navitems ${openNav ? 'open' : ''}`} >
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
                        <a href="/contact" className='nav-contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

