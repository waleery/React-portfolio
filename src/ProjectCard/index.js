import React, { useEffect, useRef } from 'react'
import './index.scss'
import { IoMdMore, IoIosArrowBack, IoLogoGithub } from 'react-icons/io'

const ProjectCard = ({ project }) => {
    let ref = useRef(null)

    useEffect(() => {
        console.log(ref)
    }, [ref])
    return (
        <div className="project-card" ref={ref}>
            <div className="project-img">
                <img src={project.image} />
            </div>
            <div className="project-text">
                <div className="first-side">
                    <div className="project-desc">
                        {project.gitHub && (
                            <a href={project.gitHub} target="_blank">
                                <IoLogoGithub />
                            </a>
                        )}
                        <h2>{project.title}</h2>
                        <h3>{project.seconadryText}</h3>
                    </div>
                    <div className="bottom-card">
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
                        <button
                            className="change-side"
                            onClick={() => {
                                ref.current.className += ' active'
                            }}
                        >
                            <IoMdMore />
                        </button>
                    </div>
                </div>
                <div className="second-side">
                    <ul>
                        {project.functionality.map((item, i) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                    <button
                        className="change-side back"
                        onClick={() => {
                            ref.current.className = 'project-card'
                        }}
                    >
                        <IoIosArrowBack />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
