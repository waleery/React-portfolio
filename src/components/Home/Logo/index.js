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
                            d="m 184.09 454.29 l -2.89 0.52 l -0.06 -0.71 l 2.95 0.19 z M 287.32 411.26 l 58.59 170.53 l 27.54 1.73 l -69.5 -202.3 l -16.63 30.04 z M 130.46 173.14 L 0.54 197.16 L 43.45 637.7 l 27.54 1.71 l -42.91 -440.52 l 129.91 -24.02 l -27.53 -1.73 z M 257.42 269.06 l -79.61 144.83 l 3.33 40.21 l 2.95 0.19 l 100.87 -183.5 l 96.71 -17.87 l -27.54 -1.73 l -96.71 17.87 z M 662.34 5.22 l -99.62 23.53 l -125.08 390.16 l -14.53 -42.31 L 535.18 24.02 L 634.8 0.5 l 27.54 3.72 z"
                        />
                        <path
                            stroke-width="6"
                            stroke="#ffd700"
                            d="M 661.34 2.22 L 482.69 563.14 l -110.24 20.38 l -69.5 -202.3 l -16.63 30.04 l -116.01 209.62 l -100.32 18.53 l -42.91 -440.52 l 123.92 -22.89 L 173.81 413.89 l 3.33 40.21 l 0.06 0.71 l 2.89 -0.52 l 100.87 -183.5 l 96.71 -17.87 l 41.44 120.68 l 14.53 42.31 L 561.72 25.75 l 99.62 -21 z"
                        />
                    </svg>
                </DrawSVG>
            </div>
        </div>
    )
}

export default Logo
