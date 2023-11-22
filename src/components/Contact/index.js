import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import SendMailButton from '../SendMailButton'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
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
                            strArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                ' ',
                                'm',
                                'e',
                            ]}
                            letterClass={letterClass}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Actively searching for full-time job opportunities,
                        particularly in ambitious or large projects. If you have
                        any other requests or questions, feel free to reach out
                        using the form below.
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
                        center={[53.13212150415938, 23.16846514114768]}
                        zoom={13}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker
                            position={[53.13212150415938, 23.16846514114768]}
                        >
                            <Popup>Hey, I live here :)</Popup>
                        </Marker>
                    </MapContainer>

                    <div className="info-map">
                        Patryk Walendziuk,
                        <br />
                        Poland,
                        <br />
                        Bialystok
                        <span>p.k.walendziuk@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* <Loader type="pacman" /> */}
        </>
    )
}

export default Contact
