import React, { useRef, useState } from 'react';

export default function HoverZoomImage({
  src,
  alt,
  className = '',
  zoom = 2.0,
  imgClass = '',
  style = {},
}) {
  const containerRef = useRef(null);
  const [origin, setOrigin] = useState('center center');
  const [isHovered, setIsHovered] = useState(false);

  const isTouchDevice = typeof window !== 'undefined' && (
    'ontouchstart' in window || navigator.maxTouchPoints > 0
  );

  const handleMouseMove = (e) => {
    if (!containerRef.current || isTouchDevice) return;
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
      style={style}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover object-left-top transition-transform duration-300 ${imgClass}`}
        style={{
          transform: `scale(${isHovered ? zoom : 1})`,
          transformOrigin: origin,
        }}
      />
    </div>
  );
}
