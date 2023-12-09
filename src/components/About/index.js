import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import { VerticalTimeline } from 'react-vertical-timeline-component'
import ExperienceCard from '../ExperienceCard'
import { experiences } from '../../constants/experience'
import useWindowDimensions from '../../hooks/useWindowDimensions'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [showScrollIndicator, setShowScrollIndicator] = useState(false)
    
    const { width, height } = useWindowDimensions()
    
    const userScrolled = useRef(false);
    const aboutPageRef = useRef(null)

    useEffect(() => {
        const checkOverflow = () => {

            const hasOverflowingChildren = aboutPageRef.current.offsetHeight < aboutPageRef.current.scrollHeight ||
                                           aboutPageRef.current.offsetWidth < aboutPageRef.current.scrollWidth

            if (!userScrolled.current) {
                setShowScrollIndicator(hasOverflowingChildren)
            }
        }

        const handleScroll = () => {
            setShowScrollIndicator((prev) => !prev)
            userScrolled.current = true;

            aboutPageRef.current.removeEventListener('scroll', handleScroll)
        }

        aboutPageRef?.current.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', checkOverflow)

        checkOverflow() //inital check

        return () => {
            aboutPageRef?.current?.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', checkOverflow)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="about-page" ref={aboutPageRef}>
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
            {/* <Loader type="pacman" /> */}
        </>
    )
}

export default About
