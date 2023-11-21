import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
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
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm ambitious front-end developer looking for a role in
                        established IT company with the opportunity to work with
                        the latest technologies on challenging and diverse
                        projects.
                    </p>
                    <p align="LEFT">
                        I'm quietly confident, naturally curious, and
                        perpetually working on improving my chops one design
                        problem at a time.
                    </p>
                    <p>
                        If I had to describe myself in one sentence, it would
                        be: quiet person, runner, photography enthusiast and
                        technology obsessed!!!
                    </p>
                </div>

                <div className="stage-cube-cont">
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
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
