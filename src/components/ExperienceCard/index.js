import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import './index.scss'

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: 'lightgray', color: '#fff' }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="card-icon">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                    />
                </div>
            }
        >
            <div className='card-experience'>

                <p
                    className="text-secondary"
                >
                    {experience.company_name}
                </p>
            </div>
            <ul className='experience-list'>
                {experience.points.map((point, index) => (
                    <li
                    key={`experience-point-${index}`}
                    className='experience-point'
                  >
                    {point}
                  </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

export default ExperienceCard
