import React, { useEffect, useRef } from 'react'
import './index.scss'
import { IoMdMore, IoIosArrowBack, IoLogoGithub } from 'react-icons/io'
import { IoPlayCircleOutline } from 'react-icons/io5'

const ProjectCard = ({ project }) => {
    const ref = useRef(null)

    return (
        <div className="project-card" ref={ref}>
            <div className="project-img">
                <img src={project.image} />
                {project.inProgress && (
                    <>
                        <div className="red-white-line">
                            <span>IN PROGRESS</span>
                            <span>IN PROGRESS</span>
                        </div>
                        <div className="red-white-line second">
                            <span>IN PROGRESS</span>
                            <span>IN PROGRESS</span>
                        </div>
                    </>
                )}
            </div>
            <div className="project-text">
                <div className="first-side">
                    <div className="project-desc">
                        {(project.gitHub || project.liveDemo) && (
                            <div className="github-demo">
                                {project.gitHub && (
                                    <a
                                        href={project.gitHub}
                                        target="_blank"
                                        title="GitHub repository"
                                    >
                                        <IoLogoGithub />
                                    </a>
                                )}
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        title="Live demo"
                                    >
                                        <IoPlayCircleOutline />
                                    </a>
                                )}
                            </div>
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
                                    }}
                                    key={i}
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
                        <h2>Features {project.inProgress && '(so far)'}</h2>
                        <div className="list-wrapper">
                            <ul>
                                {project.functionality.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
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
