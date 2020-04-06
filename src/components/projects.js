import React from 'react';
import ProjectBoxes from './projectBoxes';
import {FaJs, FaReact, FaNodeJs, FaCss3, FaHtml5} from "react-icons/fa";


const Projects = () => {
    return <div>
    <div id='projects-jump-to'></div>
    <div className='projects-section'>
        <div className='sub-header-background'></div>
        <h1 className="sub-header">Projects</h1>
        <ProjectBoxes />
        </div>
    </div>
}

export default Projects;