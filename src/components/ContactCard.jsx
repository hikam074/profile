import React from 'react';

export default function ContactCard({ socmed, logo, url}) {

    return ( 
        <a href={url} target="_blank" rel="noopener noreferrer" 
            className='rounded-full bg-sekunder p-2 shadow transition hover:scale-125 hover:shadow-xl hover:bg-primer'
            >
            <img src={logo} alt={socmed} className='h-5 w-5' />
        </a>
    );
}