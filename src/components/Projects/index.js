import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { projects } from '../../constants/projects'
import ProjectCard from '../ProjectCard'
import Cube from '../Cube'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const overviewArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className="projects-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={overviewArray}
                        idx={1}
                    />
                </h1>
                <Cube/>
            </div>
            <div className="projects-zone">
            {projects.map((project, i) => (
                <ProjectCard project={project} />
            ))}
            </div>
        </div>
    )
}

export default Projects
