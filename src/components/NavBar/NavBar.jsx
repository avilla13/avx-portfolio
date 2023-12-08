import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faBars, faAddressCard, faBriefcase, faUserTie, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [openNav, setOpenNav] = useState(null);

    const toggleSidebar = () => {
        setOpenNav(!openNav);
    };

    return (
        <nav>
            <button onClick={toggleSidebar} className='navtoggle'>
                <FontAwesomeIcon icon={ faBars } size='lg' style={{color: "white",}} className="nav-icon" />
            </button>
            <div className={`navitems ${openNav ? 'open' : 'closed'}`} >
                <ul>
                    <li>
                        <Link to="/" className='nav-home'>
                            <FontAwesomeIcon icon={faHouse} size="sm" style={{color: "white",}} className="nav-icon" />
                            {openNav && <span> Home</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className='nav-about'>
                            <FontAwesomeIcon icon={faAddressCard} size="sm" style={{color: "white",}} className="nav-icon" />
                            {openNav && <span> About</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className='nav-projects'>
                            <FontAwesomeIcon icon={faBriefcase} size="sm" style={{color: "white",}} className="nav-icon" />
                            {openNav && <span> Projects</span>}
                        </Link>
                    </li>
                    <li>
                        <a href="/contact" className='nav-contact'>
                            <FontAwesomeIcon icon={faUserTie} size='sm' style={{color: "white",}} className="nav-icon" />
                            {openNav && <span> Contact</span>}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}