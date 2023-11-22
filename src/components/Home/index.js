import LogoTitle from '../../assets/images/logo-w.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const hiArray = ['H', 'i', ',']
    const imArray = ['I', "'", 'm']
    const nameArray = ['a', 'l', 'e', 'r', 'y']
    const jobArray = [
        'w',
        'e',
        'b',
        '',
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

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="home-page">
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
                <h2>Frontend Developer | Continuous Learner</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
        {/* <Loader type="pacman" /> */}
        </>
    )
}

export default Home
