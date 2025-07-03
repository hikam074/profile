import React, { useState, useEffect } from 'react';
import LazyReveal from './LazyReveal';

/**
 *  - children : React nodes (cards/items)
 *  - gridClassName : Tailwind grid classes for visual layout (default: 1/2/3 cols)
 *  - rowGap : vertical gap between rows (Tailwind class)
 *  - sequential : true → each item waits prev (default true)
 *  - duration : animation duration per item (s)
 *  - stagger : override delay between items
 *  - ...revealProps: props forwarded to LazyReveal
 */

function getItemsPerRow(width) {
  if (width >= 1024) return 3; // lg
  if (width >= 640) return 2;  // sm
  return 1;                    // default
}
function useItemsPerRow() {
  // Fallback to 3 if window is undefined (SSR)
  const [itemsPerRow, setItemsPerRow] = useState(() =>
    typeof window === 'undefined' ? 3 : getItemsPerRow(window.innerWidth)
  );
  useEffect(() => {
    const handleResize = () => setItemsPerRow(getItemsPerRow(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return itemsPerRow;
}

export default function GridReveal({
  children,
  gridClassName = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  rowGap = 'gap-6',
  className = '',
  sequential = true,
  duration = 0.5,
  stagger,
  ...revealProps
}) {
  // Convert children ke array untuk slicing
  const items = React.Children.toArray(children);
  const itemsPerRow = useItemsPerRow();
  // Grouping child ke baris
  const rows = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow));
  }
  const effectiveStagger = sequential ? (stagger ?? duration) : (stagger ?? 0.1);

  return (
    <div className={`flex flex-col ${rowGap} ${className}`}>
      {rows.map((row, i) => (
        <LazyReveal
          key={i}
          className={`grid ${gridClassName} gap-6 mb-6`}
          duration={duration}
          stagger={effectiveStagger}
          {...revealProps}
        >
          {row}
        </LazyReveal>
      ))}
    </div>
  );
}
