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
            contentStyle={{ background: '#16445d', color: '#fff' }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="card-icon">
                    <img
                        src={experience.icon}
                        alt={experience.title}
                    />
                </div>
            }
        >
            <div className='card-experience'>
                <h3>{experience.title}</h3>
                <p
                    className="text-secondary"
                >
                    {experience.secondaryText}
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
