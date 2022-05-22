import './index.scss'
import LogoW from '../../../assets/images/logo-w.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import DrawSVG from 'react-svg-drawing'

//import walkway from 'walkway.js'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        //showing up backgroud container, and logo
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline().to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoW}
                alt="W"
            />
            <DrawSVG duration="3000" easing="easeInQuint" width>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 665.74 640"
                >
                    <title>{'w outline'}</title>
                    <path
                        stroke-width="3"
                        stroke="#ffd700"
                        d="m184.09 454.29-2.89.52-.06-.71 2.95.19zM287.32 411.26l58.59 170.53 27.54 1.73-69.5-202.3-16.63 30.04zM130.46 173.14.54 197.16 43.45 637.7l27.54 1.71-42.91-440.52 129.91-24.02-27.53-1.73zM257.42 269.06l-79.61 144.83 3.33 40.21 2.95.19 100.87-183.5 96.71-17.87-27.54-1.73-96.71 17.87zM662.34 2.22l-99.62 23.53-125.08 390.16-14.53-42.31L535.18 24.02 634.8.5l27.54 1.72z"
                    />
                    <path
                        stroke-width="3"
                        stroke="#ffd700"
                        d="M662.34 2.22 483.69 563.14l-110.24 20.38-69.5-202.3-16.63 30.04-116.01 209.62-100.32 18.53-42.91-440.52 129.91-24.02 19.82 239.02 3.33 40.21.06.71 2.89-.52 100.87-183.5 96.71-17.87 41.44 120.68 14.53 42.31L562.72 25.75l99.62-23.53z"
                    />
                </svg>
            </DrawSVG>
        </div>
    )
}

export default Logo
