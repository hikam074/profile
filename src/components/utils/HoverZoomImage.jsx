import React, { useRef, useState } from 'react';

export default function HoverZoomImage({
  src,
  alt,
  className = '',
  zoom = 2.0,
  imgClass = '',
  style = {},
  longPressDelay = 300, // waktu menahan jari sebelum aktif zoom
}) {
  const containerRef = useRef(null);
  const [origin, setOrigin] = useState('center center');
  const [isHovered, setIsHovered] = useState(false);
  const touchTimeout = useRef(null);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

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

  const handleTouchStart = (e) => {
    if (!containerRef.current) return;

    // Set posisi zoom ke tengah atau ke titik sentuh
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);

    // Set timer untuk long press
    touchTimeout.current = setTimeout(() => {
      setIsHovered(true);
    }, longPressDelay);
  };

  const handleTouchEnd = () => {
    clearTimeout(touchTimeout.current);
    setIsHovered(false);
    setOrigin('center center');
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`overflow-hidden ${className}`}
      style={style}
    >
      <div
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full bg-no-repeat bg-contain bg-center select-none pointer-events-none transition-transform duration-300 ${imgClass}`}
        style={{
          transform: `scale(${isHovered ? zoom : 1})`,
          transformOrigin: origin,
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  );
}