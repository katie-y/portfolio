import React from 'react';
import ProjectBoxes from './projectBoxes';


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