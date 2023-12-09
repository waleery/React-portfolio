import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { projects } from '../../constants/projects'
import ProjectCard from '../ProjectCard'
import Cube from '../Cube'
import { FaChevronDown } from 'react-icons/fa6'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const overviewArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

    const [showScrollIndicator, setShowScrollIndicator] = useState(false)
    const projectsZoneRef = useRef(null)
    const userScrolled = useRef(false)

    useEffect(() => {
        const checkOverflow = () => {
            const hasOverflowingChildren =
                projectsZoneRef.current.offsetHeight <
                    projectsZoneRef.current.scrollHeight ||
                projectsZoneRef.current.offsetWidth <
                    projectsZoneRef.current.scrollWidth

            if (!userScrolled.current) {
                setShowScrollIndicator(hasOverflowingChildren)
            }
        }

        const handleScroll = () => {
            setShowScrollIndicator((prev) => !prev)
            userScrolled.current = true

            projectsZoneRef.current.removeEventListener('scroll', handleScroll)
        }

        projectsZoneRef?.current.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', checkOverflow)

        checkOverflow() //inital check

        return () => {
            projectsZoneRef?.current?.removeEventListener(
                'scroll',
                handleScroll
            )
            window.removeEventListener('resize', checkOverflow)
        }
    }, [])

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
                <Cube />
            </div>
            <div className="projects-zone" ref={projectsZoneRef}>
                {projects.map((project, i) => (
                    <ProjectCard project={project} />
                ))}
                <div
                    className="show-scroll-indicator"
                    style={
                        !showScrollIndicator
                            ? {
                                  opacity: 0,
                                  transition: 'opacity 0.5s ease-in-out',
                              }
                            : null
                    }
                >
                    <FaChevronDown />
                </div>
            </div>
        </div>
    )
}

export default Projects
