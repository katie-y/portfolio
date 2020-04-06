import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import {MdKeyboardArrowRight} from 'react-icons/md';

// const About = () => {
//     return <div>
//     <div id='about-jump-to'></div>
//     <div id='about-section' >
//     <div className='sub-header-background'></div>
//     <h1 className="sub-header">About</h1>
//     <p className='about-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Similique veniam natus ad mollitia dolorem dolores, eos 
//     facere beatae! Ipsam in quas mollitia illo deserunt, vero 
//     error temporibus reprehenderit deleniti natus? Quibusdam 
//     ipsum veritatis sint, temporibus maiores porro 
//     exercitationem adipisci voluptatum mollitia vel tempore! 
//     Esse aperiam deleniti enim nam? Doloribus ipsam quod 
//     facilis numquam quasi culpa necessitatibus laudantium sunt 
//     deleniti earum qui iure fugiat tempore eligendi ut at 
//     eveniet modi laboriosam molestiae harum exercitationem, 
//     facere sapiente nesciunt vitae. Perferendis, excepturi 
//     error. Eum quidem ex similique esse perspiciatis saepe, 
//     perferendis cumque. Rerum dicta aut ullam id, expedita 
//     commodi neque natus illum minima.</p>
//     <p className='about-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Similique veniam natus ad mollitia dolorem dolores, eos 
//     facere beatae! Ipsam in quas mollitia illo deserunt, vero 
//     error temporibus reprehenderit deleniti natus? Quibusdam 
//     ipsum veritatis sint, temporibus maiores porro 
//     exercitationem adipisci voluptatum mollitia vel tempore! 
//     Esse aperiam deleniti enim nam? Doloribus ipsam quod 
//     facilis numquam quasi culpa necessitatibus laudantium sunt 
//     deleniti earum qui iure fugiat tempore eligendi ut at 
//     eveniet modi laboriosam molestiae harum exercitationem, 
//     facere sapiente nesciunt vitae. Perferendis, excepturi 
//     error. Eum quidem ex similique esse perspiciatis saepe, 
//     perferendis cumque. Rerum dicta aut ullam id, expedita 
//     commodi neque natus illum minima.</p>
// </div>
// </div>
// }

// test

const About = () => {
    return <div>
    <div id='about-jump-to'></div>
    <div id='about-section' >
    <div className='sub-header-background'></div>
    <h1 className="sub-header">About Me</h1>
    
    <div className="about-box">
        <div className="about-box-inner">
            <div className="about-box-front">
                <p className='about-info'>Hi, I'm Katie! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique veniam natus ad mollitia dolorem dolores, eos 
                facere beatae! Ipsam in quas mollitia illo deserunt, vero 
                error temporibus reprehenderit deleniti natus? Quibusdam 
                ipsum veritatis sint, temporibus maiores porro 
                exercitationem adipisci voluptatum mollitia vel tempore! 
                Esse aperiam deleniti enim nam? Doloribus ipsam quod 
                facilis numquam quasi culpa necessitatibus laudantium sunt 
                deleniti earum qui iure fugiat tempore eligendi ut at 
                eveniet modi laboriosam molestiae harum exercitationem, 
                facere sapiente nesciunt vitae.</p>
                <div className='box-flip' >
                <p>See my skills </p>
                <MdKeyboardArrowRight id='flip-arrow'/>
                </div>
            </div>
            <div className="skills-box-back">
                <h2 id='skills-header'>Skills</h2>
                <FaJs className='skill-icon'/>
                <FaReact className='skill-icon'/>
                <FaNodeJs className='skill-icon'/>
                <FaCss3 className='skill-icon'/>
                <FaHtml5 className='skill-icon'/>
            </div>
        </div>
    </div>
    </div>
    </div>
}

export default About;