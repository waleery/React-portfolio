import React, { useEffect, useState } from 'react'
import './index.scss'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import AnimatedLetters from '../AnimatedLetters'
import ExperienceCard from '../ExperienceCard'
import { experiences } from '../../constants/projects'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const overviewArray = ['O', 'v', 'e', 'r', 'v', 'i', 'e', 'w']

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
            </div>
            {/* <div className="timeline-zone">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div> */}
        </div>
    )
}

export default Projects
