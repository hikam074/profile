import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from 'react-icons/md';
import pengalaman from "../../data/pengalamans";

const TimelineExperiences = () => {
    return (
        <div className="py-6">
            <h3 className="text-4xl font-bold py-6 text-center">Pengalaman</h3>
            <VerticalTimeline>
                {pengalaman.map((item, index) => (
                    <VerticalTimelineElement key={index} date={item.date} icon={item.icon}
                        iconStyle={{ background: item.backgroundColor, color: '#fff' }}
                        >
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <h5 className="font-extralight text-sm pb-2">{item.subtitle}</h5>
                        <span className="font-light">{item.deskripsi}</span>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    )
}

export default TimelineExperiences;