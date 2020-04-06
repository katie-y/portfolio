import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
    
    return <div className='home-section'>
        <h1 id='home-name'>Katie York</h1>
        <h4 id='home-job'>Software Developer</h4>
        <a href='#about-jump-to'> <FaChevronDown id='home-arrow-down' /></a>
    </div>
}

export default Home;