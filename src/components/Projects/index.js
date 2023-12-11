import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { projects } from '../../constants/projects'
import ProjectCard from '../ProjectCard'
import Cube from '../Cube'
import { FaChevronDown } from 'react-icons/fa6'
import useShowScrollIndicator from '../../hooks/useShowScrollIndicator'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const overviewArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

    const projectsZoneRef = useRef(null)
    const projectsPageRef = useRef(null)
    const userScrolled = useRef(false)

    const showScrollIndicatorAtProjectSection = useShowScrollIndicator(
        projectsZoneRef,
        userScrolled
    )
    const showScrollIndicatorAtProjectsPage = useShowScrollIndicator(
        projectsPageRef,
        userScrolled
    )
    const { width } = useWindowDimensions()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className="projects-page" ref={projectsPageRef}>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={overviewArray}
                        idx={1}
                    />
                </h1>
                <Cube />
            </div>
            <div className="projects-zone" ref={projectsZoneRef}>
                {projects.map((project, i) => (
                    <ProjectCard project={project} key={i} />
                ))}
                <div
                    className="show-scroll-indicator"
                    style={
                        !showScrollIndicatorAtProjectSection
                            ? {
                                  opacity: 0,
                              }
                            : null
                    }
                >
                    <FaChevronDown />
                </div>
            </div>
            <div
                className="show-scroll-indicator"
                style={{
                    left: '50%',
                    transform: 'translate(-50%)',
                    ...(!showScrollIndicatorAtProjectsPage
                        && {
                              opacity: 0,
                          }),
                    ...(width > 900 && {display:'none', opacity:0}),
                }}
            >
                <FaChevronDown />
            </div>
        </div>
    )
}

export default Projects
