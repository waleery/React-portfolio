import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import SendMailButton from '../SendMailButton'
import { contactP1 } from '../../constants/contact'
import { contactH1 } from '../../constants/contact'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [paragrafLetterClass, setParagrafLetterClass] = useState('paragraf-text-animate')
    
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)

        setTimeout(() => {
            setParagrafLetterClass('paragraf-text-animate-hover')
        }, 2900)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_q3qt8uf',
                'template_7br2n8j',
                refForm.current,
                'jtf5GKdOr9tYibcFd'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(true)
                },
                () => {
                    alert('Failed to send, try again')
                }
            )
    }

    return (
        <>
            <div className="contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={contactH1}
                            letterClass={letterClass}
                            idx={2}
                        />
                    </h1>
                    <p>
                        <AnimatedLetters
                            letterClass={paragrafLetterClass}
                            strArray={contactP1}
                            idx={13}
                        />
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="Subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <div className="flat-button">
                                        <SendMailButton type="submit" />
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="map-wrap">
                    <MapContainer
                        center={[51.77305346568799, 19.48255096963088]}
                        zoom={13}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker
                            position={[51.77305346568799, 19.48255096963088]}
                        >
                            <Popup>Hey, I live here :)</Popup>
                        </Marker>
                    </MapContainer>

                    <div className="info-map">
                        Patryk Walendziuk,
                        <br />
                        Poland,
                        <br />
                        Łódź
                        <a href="mailto:p.k.walendziuk@gmail.com">
                            p.k.walendziuk@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* <Loader type="pacman" /> */}
        </>
    )
}

export default Contact
