import './index.scss'
import LogoW from '../../../assets/images/logo-w.png'

import DrawSVG from 'react-svg-drawing'

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="solid-logo1" src={LogoW} alt="W" />
            <div className="outline">
                <DrawSVG duration="2000" easing="easeInBack" width>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 665.74 640"
                    >
                        <title>{'w outline'}</title>
                        <path
                            stroke-width="7"
                            stroke="#ffd700"
                            d="m184.09 454.29-2.89.52-.06-.71 2.95.19zM287.32 411.26l58.59 170.53 27.54 1.73-69.5-202.3-16.63 30.04zM130.46 173.14.54 197.16 43.45 637.7l27.54 1.71-42.91-440.52 129.91-24.02-27.53-1.73zM257.42 269.06l-79.61 144.83 3.33 40.21 2.95.19 100.87-183.5 96.71-17.87-27.54-1.73-96.71 17.87zM662.34 2.22l-99.62 23.53-125.08 390.16-14.53-42.31L535.18 24.02 634.8.5l27.54 1.72z"
                        />
                        <path
                            stroke-width="7"
                            stroke="#ffd700"
                            d="M 661.34 2.22 L 482.69 563.14 l -110.24 20.38 l -69.5 -202.3 l -16.63 30.04 l -116.01 209.62 l -100.32 18.53 l -42.91 -440.52 l 123.92 -22.89 L 173.81 413.89 l 3.33 40.21 l 0.06 0.71 l 2.89 -0.52 l 100.87 -183.5 l 96.71 -17.87 l 41.44 120.68 l 14.53 42.31 L 561.72 25.75 l 99.62 -23.53 z"
                        />
                    </svg>
                </DrawSVG>
            </div>
        </div>
    )
}

export default Logo
