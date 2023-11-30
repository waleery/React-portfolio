import React from 'react'
import './index.scss'
const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src={project.image} />
            </div>
            <div className="first-side">
                <div className="project-desc">
                    <h2>{project.title}</h2>
                    <h3>{project.seconadryText}</h3>
                </div>
            </div>
            <div className="second-side"></div>
        </div>
    )
}

export default ProjectCard
