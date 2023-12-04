import React, { useEffect, useRef } from 'react'
import './index.scss'
import { IoMdMore, IoIosArrowBack, IoLogoGithub } from 'react-icons/io'
import { IoPlayCircleOutline } from 'react-icons/io5'

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
                                        textShadow:
                                            item.color === 'black'
                                                ? `${item.color} 0px 0px 0.5px, ${item.color} 0px 0px 50px, ${item.color} 0px 0px 10px`
                                                : `${item.color} 0px 0px 14px, ${item.color} 0px 0px 10px, ${item.color} 0px 0px 5px`,
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
                    <h2>Features</h2>
                    <div className='list-wrapper'>
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
        </div>
    )
}

export default ProjectCard
