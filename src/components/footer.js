import React from 'react';
import {FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa'
import {DiCodepen} from 'react-icons/di'

const Footer = () => {
    return <div className='footer'>
    <ul className='footer-icon-box'>
        <li><a href="mailto:katie_york@hotmail.co.uk"><FaEnvelope id='footer-icon'/></a></li>
        <li><a href='https://github.com/katie-y/'><FaGithub id='footer-icon' /></a></li>
        <li><FaLinkedin id='footer-icon'/></li>
        <li><DiCodepen id='footer-icon'/></li>
    </ul>

    </div>

}

export default Footer;