import React from 'react'
import './index.scss'
const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src={project.image} />
            </div>
            <div className='project-text'>
                <div className="first-side">
                    <div className="project-desc">
                        <h2>{project.title}</h2>
                        <h3>{project.seconadryText}</h3>
                    </div>
                    <div className="project-technologies">
                        {project.techStack.map((item, i) => (
                            <div
                                className="project-technology"
                                style={{
                                    color: item.color,
                                    textShadow: `${item.color} 0px 0px 14px, ${item.color} 0px 0px 10px, ${item.color} 0px 0px 5px`,
                                }}
                            >
                                <img src={item.icon} />
                                {item.technology}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="second-side">
                    <ul>
                        {project.functionality.map((item, i) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
