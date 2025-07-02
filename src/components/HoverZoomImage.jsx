// src/components/HoverZoomImage.jsx
import React, { useRef, useState } from 'react';

export default function HoverZoomImage({ src, alt, className = '', zoom = 2.0 }) {
  const containerRef = useRef(null);
  const [origin, setOrigin] = useState('center center');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOrigin('center center');
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-left-top transition-transform duration-300"
        style={{
          transform: `scale(${isHovered ? zoom : 1})`,
          transformOrigin: origin,
        }}
      />
    </div>
  );
}
