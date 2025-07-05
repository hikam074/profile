import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 *  - asChild : boolean – kalau true, children[0] jadi elemen animasi (tanpa wrapper extra)
 *  - useContents: boolean – kalau true, wrapper memakai display:contents (box hilang)
 */
export default function LazyReveal({
  children,
  direction = 'left',
  duration = 0.3,
  stagger,
  triggerOnce = false,
  threshold = 0.1,
  className = '',
  asChild = false,
  useContents = false,
}) {
  const offsets = {
    left:  { x: -40, y: 0 },
    right: { x: 40,  y: 0 },
    up:    { x: 0,   y: 40 },
    down:  { x: 0,   y: -40 },
    fade:  { x: 0,   y: 0 },
  };
  const offset = offsets[direction] || offsets.left;
  const staggerDelay = stagger ?? duration;

  const containerVariants = {
    hidden: {},
    show:   { transition: { staggerChildren: staggerDelay, staggerDirection: 1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, ...offset },
    show:   { opacity: 1, x: 0, y: 0, transition: { duration, ease: 'easeOut' } },
  };

  const { ref, inView } = useInView({ triggerOnce, threshold });

  if (asChild) {
    const first = React.Children.only(children);
    return (
      <motion.div
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {first}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
      style={useContents ? { display: 'contents' } : undefined}
    >
      {React.Children.map(children, (child, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
