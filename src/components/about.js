import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FaJs, FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import {MdKeyboardArrowRight} from 'react-icons/md';
import CNlogo from '../cn-logo.svg';

class About extends Component {
    flip = () => {
        this.refs.Card.classList.toggle("backCard");
        this.refs.Card.classList.toggle("frontCard");
        this.refs.frontCard.classList.toggle("deactive");
        this.refs.frontCard.classList.toggle("active");
        this.refs.backCard.classList.toggle("deactive");
        this.refs.backCard.classList.toggle("active");
      }

    render(){
    return ( <>
    <div id='about-jump-to'></div>
    <div id='about-section' >
    <div className='sub-header-background'></div>
    <h1 className="sub-header">About Me</h1>    
    <div className="about-box"  >
        <div className="about-box-inner" ref="Card" onClick={this.flip}>
            <div className="about-box-front active" ref="frontCard" >
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
                facere sapiente nesciunt vitae.
                </p>
                <div className='box-flip' >
                <p>See my skills </p>
                <MdKeyboardArrowRight id='flip-arrow'/>
                </div>
            </div>
            <div className="skills-box-back deactive" ref="backCard" >
                <h2 id='skills-header'>Skills</h2>
                <div id="all-skills-icon-container">
                <div className="skill-icon-box"> <FaJs className='skill-icon' id="JS-icon"/><p>Writing about skill or something</p></div>
                <div className="skill-icon-box"><FaReact className='skill-icon' id="react-icon"/><p>Writing about skill or something</p></div>
                <div className="skill-icon-box"><FaNodeJs className='skill-icon' id="node-icon"/><p>Writing about skill or something</p></div>
                <div className="skill-icon-box"><FaCss3 className='skill-icon' id="css-icon"/><p>Writing about skill or something</p></div>
                <div className="skill-icon-box"><FaHtml5 className='skill-icon' id="html-icon"/><p>Writing about skill or something</p></div>
                </div>
                <MdKeyboardArrowRight id='back-flip-arrow' />
            </div>
        </div>
    </div>
    </div>
    </>
    )
}
}

export default About;

