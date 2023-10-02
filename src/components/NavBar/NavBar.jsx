import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faBars, faAddressCard, faBriefcase, faUserTie, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [openNav, setOpenNav] = useState(true);

    const toggleSidebar = () => {
        setOpenNav(!openNav);
    };

    return (
        <nav>
            <button onClick={toggleSidebar} className='navtoggle'>
                <FontAwesomeIcon icon={ faBars } size='lg' style={{color: "#003ca3",}} />
            </button>
            <div className={`navitems ${openNav ? 'open' : ''}`} >
                <ul>
                    <li>
                        <Link to="/" className='nav-home'>
                            <FontAwesomeIcon icon={faHouse} size="sm" style={{color: "white",}} /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className='nav-about'>
                            <FontAwesomeIcon icon={faAddressCard} size="sm" style={{color: "white",}} /> About
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className='nav-projects'>
                            <FontAwesomeIcon icon={faBriefcase} size="sm" style={{color: "white",}} /> Projects
                        </Link>
                    </li>
                    <li>
                        <a href="/contact" className='nav-contact'>
                            <FontAwesomeIcon icon={faUserTie} size='sm' style={{color: "white",}} /> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}