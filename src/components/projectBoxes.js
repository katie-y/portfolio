import React, { Component } from 'react';
import { FaJs, FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { TiThSmall } from 'react-icons/ti';
import TwoDiceGame from '../2dicegame.png'
import Nasa from '../nasa.png';

class ProjectBox extends Component {
    state = {
        projects: [
            { idname: "box1", name: "Two player dice game", icon: <FaJs />, image: TwoDiceGame,link:  'https://katie-y.github.io/twoplayerdicegame/' },
            { idname: "box2", name: "NASA Photo a day API", icon: <FaReact />, image: Nasa },
            { idname: "box3", name: "Project 3", icon: <FaNodeJs /> },
            { idname: "box4", name: "Project 4", icon: <FaCss3 /> },
            { idname: "box5", name: "Project 5", icon: <FaHtml5 /> },
        ],
        show: 0,
        showAll: false,
    }

    next = () => {
        this.state.show === 4 ? this.setState({ show: 0 }) : this.setState({ show: this.state.show + 1 })
    }
    previous = () => {
        this.state.show === 0 ? this.setState({ show: 4 }) : this.setState({ show: this.state.show - 1 });
    }
    showAllToggle = () => {
        this.state.showAll ? this.setState({ showAll: false }) : this.setState({ showAll: true })
    }

    render() {
        const slides = () => {
            if (!this.state.showAll) {
                let i = this.state.show;
                return <div className='slide-boxes-container'>
                <div className='arrows-and-box'>
                    <MdKeyboardArrowLeft id='slide-arrow-left' onClick={this.previous} />
                    <a href={this.state.projects[i].link} className="single-box" id={"single-" + this.state.projects[i].idname}><img src={this.state.projects[i].image} alt="" /><div id='single-box-content' >{this.state.projects[i].name}{this.state.projects[i].icon}</div></a>
                    <MdKeyboardArrowRight id='slide-arrow-right' onClick={this.next} />
                    </div>
                </div>
            }
        }
        
        const allSlides = this.state.projects.map((project) => {
            return <a href={project.link} className="box" id={project.idname} key={project.idname}><div id='box-content' >{project.name}{project.icon}</div></a>
        })
        const showAllSlides = () => {
            if(this.state.showAll){
                return <div className="all-boxes">{allSlides}</div>
            }
        }
        return (
            <div>
            <div id='project-filters'>
                <TiThSmall className="filter" id='all-filter' onClick={this.showAllToggle} />
                <FaJs className="filter" id="JS-filter" />
                <FaReact className='filter' id="react-filter"/>
                <FaNodeJs className='filter' id="node-filter"/>
                <FaCss3 className='filter' id="css-filter" />
                <FaHtml5 className='filter' id="html-filter"/>
                </div>
                {slides()}
                {showAllSlides()}
            </div>

        )
    }
}


// test





export default ProjectBox;