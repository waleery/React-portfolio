import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJava,
    faJsSquare,
    faReact,
    faNode,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FaChevronDown } from 'react-icons/fa6'

import { VerticalTimeline } from 'react-vertical-timeline-component'
import ExperienceCard from '../ExperienceCard'
import { experiences } from '../../constants/experience'
import useWindowDimensions from '../../hooks/useWindowDimensions'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [showScrollIndicator, setShowScrollIndicator] = useState(true)
    const { width, height } = useWindowDimensions()

    const timelineRef = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            if (showScrollIndicator) {
                setShowScrollIndicator((prev) => !prev)
                timelineRef.current.removeEventListener('scroll', handleScroll)
            }
        }

        timelineRef?.current.addEventListener('scroll', handleScroll)

        return () => {
            timelineRef?.current?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="about-page" ref={timelineRef}>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm an ambitious front-end developer seeking a role in a
                        well-established IT company. I'm eager to work with the
                        latest technologies on interesting and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quietly confident, naturally curious, and always
                        working on improving my skills one design problem at a
                        time.
                    </p>
                    <p>
                        If I had to sum myself up in one sentence: I'm a
                        laid-back person, a runner, a photography enthusiast,
                        and totally obsessed with technology!
                    </p>
                </div>
                <div className="time-line">
                    <VerticalTimeline
                        lineColor={'yellow'}
                        layout={width < 1650 || height < 950 ? '1-column-right' : '2-columns'}
                    >
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                    {width < 900 && (
                        <div
                            className="show-scroll-indicator"
                            style={
                                !showScrollIndicator
                                    ? {
                                          opacity: 0,
                                          transition:
                                              'opacity 0.5s ease-in-out',
                                      }
                                    : null
                            }
                        >
                            <FaChevronDown />
                        </div>
                    )}
                </div>

                {/* <div className="stage-cube-cont">
                    <div className="center">X</div>
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faNode} color="#215732" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D2A" />
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <Loader type="pacman" /> */}
        </>
    )
}

export default About
