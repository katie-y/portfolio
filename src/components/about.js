import React, { Component } from 'react';
import { FaJs, FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import {MdKeyboardArrowRight} from 'react-icons/md';
import CNlogo from '../cn-logo.svg';

class About extends Component {
    state ={
        active: false
    }

    flip = () => {   
        let currentState = this.state.active;
        this.setState ({
            active: !currentState
        });
        console.log(this.state.active)
    };

    render(){
    return ( <div>
    <div id='about-jump-to'></div>
    <div id='about-section' >
    <div className='sub-header-background'></div>
    <h1 className="sub-header">About Me</h1>    
    <div className="about-box"  >
        <div className="about-box-inner">
            <div className="about-box-front" onClick={this.flip}>
                <p className='about-info'>Hi, I'm Katie! Still need to write this part.
                Something about Code Nation <a href="https://wearecodenation.com/"><img src ={CNlogo} style={{height: "2vh"}} alt="" /></a>. Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            <div className="skills-box-back" onClick={this.flip}>
                <h2 id='skills-header'>Skills</h2>
                <div id="skills-icon-container">
                <FaJs className='skill-icon' id="JS-icon"/>
                <FaReact className='skill-icon' id="react-icon"/>
                <FaNodeJs className='skill-icon' id="node-icon"/>
                <FaCss3 className='skill-icon' id="css-icon"/>
                <FaHtml5 className='skill-icon' id="html-icon"/>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}
}

export default About;