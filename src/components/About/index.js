import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import { VerticalTimeline } from 'react-vertical-timeline-component'
import ExperienceCard from '../ExperienceCard'
import { experiences } from '../../constants/experience'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import useShowScrollIndicator from '../../hooks/useShowScrollIndicator'
import { aboutMeH1, aboutMeP1, aboutMeP2, aboutMeP3, h1, p1, p2, p3 } from '../../constants/aboutMe'
const About = () => {
    const [headerLetterClass, setHeaderLetterClass] = useState('text-animate')
    const [paragrafLetterClass, setParagrafLetterClass] = useState('paragraf-text-animate')
    //const [showScrollIndicator, setShowScrollIndicator] = useState(false)

    const { width, height } = useWindowDimensions()

    const userScrolled = useRef(false);
    const aboutPageRef = useRef(null)
    const timeLineRef = useRef(null)

    const showScrollIndicatorPage = useShowScrollIndicator(aboutPageRef, userScrolled)
    const showScrollIndicatorTimeLine= useShowScrollIndicator(timeLineRef, userScrolled)

    useEffect(() => {
        setTimeout(() => {
            setHeaderLetterClass('text-animate-hover')
        }, 1000)
        
        setTimeout(() => {
            setParagrafLetterClass('paragraf-text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="about-page" ref={aboutPageRef}>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={headerLetterClass}
                            strArray={aboutMeH1}
                            idx={2}
                        />
                    </h1>
                    <p>
                        <AnimatedLetters
                            letterClass={paragrafLetterClass}
                            strArray={aboutMeP1}
                            idx={20}
                        />
                    </p>
                    <p align="LEFT">
                        <AnimatedLetters
                            letterClass={paragrafLetterClass}
                            strArray={aboutMeP2}
                            idx={189}
                        />
                    </p>
                    <p>
                        <AnimatedLetters
                            letterClass={paragrafLetterClass}
                            strArray={aboutMeP3}
                            idx={301}
                        />
                    </p>
                </div>
                <div className="time-line"
                        ref={timeLineRef}
>
                    <VerticalTimeline
                        lineColor={'#ffd700'}
                        layout={
                            width < 1650 || height < 950
                                ? '1-column-right'
                                : '2-columns'
                        }
                    >
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                    <div
                        className="show-scroll-indicator"
                        style={
                            !showScrollIndicatorPage && !showScrollIndicatorTimeLine
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
            {/* <Loader type="pacman" /> */}
        </>
    )
}

export default About
