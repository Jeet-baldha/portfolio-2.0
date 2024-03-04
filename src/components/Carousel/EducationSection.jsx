import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";


function EducationSection() {
    return (
    <>
            <VerticalTimeline lineColor='rgb(33, 150, 243)' layout='2-column'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work p-0"
                    contentStyle={{ background: 'rgb(59 130 246)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(59 130 246)' }}
                    date="2021 - present"
                    iconStyle={{ background: 'rgb(59 130 246)', color: '#fff' }}
                    icon={<FaUniversity />}
                    textClassName='text-white'
                >
                    <h3 className="vertical-timeline-element-title">B.tech in Computer Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">RK University</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work p-0"
                    contentStyle={{ background: 'rgb(59 130 246)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(59 130 246)' }}
                    date="2019 - 2021"
                    iconStyle={{ background: 'rgb(59 130 246)', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">12th board</h3>
                    <h4 className="vertical-timeline-element-subtitle">Swaminrayan gurukul, Rajkot</h4>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </>
            )
}

export default EducationSection