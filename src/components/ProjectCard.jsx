import React from 'react';
import techBadges from '../data/techBadges';
import iconCode from '../assets/icons/icon-code.svg';
import HoverZoomImage from './utils/HoverZoomImage';

export default function ProjectCard({ title, description, year, image, technologies, category, link }) {
    const categoryColors = {
        "Design": "bg-red-200",
        "CLI App": "bg-gray-200",
        "Desktop App": "bg-purple-200",
        "Web Fullstack": "bg-blue-200",
        "Web Frontend": "bg-green-200",
        default: "bg-white"
        };

    return ( 
        <div className='bg-white p-4 rounded-lg shadow flex flex-col justify-between border gap-2 h-full
            hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300'
            >
            <div className='flex flex-col gap-2'>
                {image && (
                    <div
                    onTouchStart={(e) => e.preventDefault()}
                    className="select-none"
                    >
                    <HoverZoomImage
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="h-48 p-1 border border-dashed border-tersier"
                    />
                    </div>
                )}

                <div className='flex flex-col gap-2'>
                    <h3 className='font-bold text-xl text-primer'>{title}</h3>
                    <div className="flex items-center gap-2 mb-1">
                    <span className='text-[10px] font-semibold px-2 py-1 rounded-full shadow border text-gray-800'>
                        {year}
                    </span>
                    {category && (
                        <span className={`text-[10px] font-semibold px-2 py-1 rounded-full shadow border ${categoryColors[category] || categoryColors.default} text-gray-800 capitalize`}>
                        {category}
                        </span>
                    )}
                    </div>
                    <p className='text-sm font-light'>{description}</p>

                    {technologies && (
                    <div className='py-1'>
                        <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <img
                            key={index}
                            alt={tech}
                            src={techBadges[tech] || techBadges.default}
                            className="inline-block h-5"
                            title={tech}
                            loading="lazy"
                            />
                        ))}
                        </div>
                    </div>
                    )}
                </div>
            </div>
            {link && (
            <a href={link} target="_blank" rel="noopener noreferrer"
                className="w-full flex gap-1 justify-center px-2 py-1 bg-sekunder hover:bg-sekunderDark rounded
                    text-center text-white text-sm"
                >
                <img src={iconCode} className='h-5'/> Lihat Disini
            </a>
            )}
        </div>
    );
}