import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * LazyReveal
 * -------------
 * Wrapper component that reveals its children with a staggered animation when scrolled into view.
 *
 * Props:
 *  - direction  : 'left' | 'right' | 'up' | 'down' | 'fade' (default 'left')
 *  - duration   : time (seconds) for each item's animation (default 0.5)
 *  - stagger    : delay between items (seconds). Default = duration (sequential)
 *  - triggerOnce: boolean (default true) – reveal only the first time in view
 *  - threshold  : Intersection‑Observer threshold (default 0.1)
 *  - className  : custom classes for the container
 */
export default function LazyReveal({
  children,
  direction = 'left',
  duration = 0.5,
  stagger,
  triggerOnce = true,
  threshold = 0.1,
  className = '',
}) {
  // If stagger not provided, use duration so each item starts when previous ends
  const staggerDelay = stagger ?? duration;

  // Offset map for initial position
  const offsets = {
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    fade: { x: 0, y: 0 },
  };

  const offset = offsets[direction] || offsets.left;

  // Variants for container & items
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
        staggerDirection: 1, // left‑to‑right / top‑to‑bottom order
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: 'easeOut' },
    },
  };

  // Intersection Observer to detect when component enters viewport
  const { ref, inView } = useInView({ triggerOnce, threshold });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
