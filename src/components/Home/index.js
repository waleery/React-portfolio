import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const hiArray = ['H', 'i', ',']
    const imArray = ['I', "'", 'm']
    const nameArray = ['a', 'l', 'e', 'r', 'y']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={hiArray}
                        idx={10}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={imArray}
                        idx={14}
                    />
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={17}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Student / Trying to be Frontend Developer</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
        </div>
    )
}

export default Home
