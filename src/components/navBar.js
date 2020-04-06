import React, { Component } from 'react';
import { FaHome, FaUser, FaLaptopCode } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'

class NavBar extends Component {

    render() {
        return <nav className='nav-bar'>

                <div id='nav-bar-katie'><small id='nav-katie-box'>KY</small>
                </div>
                    <div className='nav-bar-items'>
                <a href="#home-jump-to" className='nav-item' >
                    <p id="nav-text">Home</p>
                    <FaHome id='nav-icon' />
                </a>
                <a href='#about-jump-to' className='nav-item' >
                    <p id="nav-text">About</p>
                    <FaUser id='nav-icon' />
                </a>
                <a href='#projects-jump-to' className='nav-item' >
                    <p id="nav-text">Projects</p>
                    <FaLaptopCode id='nav-icon' />
                </a>
                <a href='#contact-jump-to' className='nav-item' >
                    <p id="nav-text">Contact</p>
                    <MdMessage id='nav-icon' />
                </a>
            </div>
        </nav>

    }
}
export default NavBar;