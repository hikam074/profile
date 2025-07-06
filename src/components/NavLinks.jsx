import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyReveal from './utils/LazyReveal';

export default function NavLinks({
  routes,
  isMobile = false,
  onLinkClick,
  useLazyReveal = false,
  direction = 'right',
  stagger = 0.1,
  duration = 0.3,
}) {
  const location = useLocation();

  const listItems = routes.map((r) => (
    <li key={r.to} className="relative flex">
      <NavLink to={r.to} end={r.to === '/'} onClick={() => onLinkClick?.()}
        className={({ isActive }) =>
          `px-4 py-2 font-bold transition border-b-2 border-transparent ${
            (isActive || location.hash === r.to.split('#')[1])
              ? 'text-primer'
              : 'text-sekunder hover:text-primer hover:border-b-2 hover:border-primer'
          }`
        }
      >
        {r.name}
        {(location.pathname + location.hash) === r.to && (
          <motion.div layoutId={isMobile ? 'nav-indicator' : 'nav-underline'}
            className={
              isMobile
                ? 'absolute left-0 top-0 h-full w-1 bg-primer rounded-r'
                : 'absolute left-0 bottom-0 h-0.5 w-full bg-primer'
            }
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
      </NavLink>
    </li>
  ));

  return useLazyReveal ? (
    <LazyReveal direction={direction} stagger={stagger} duration={duration}
      className={isMobile ? 'flex flex-col gap-4' : 'flex gap-6'}
    >
      {listItems}
    </LazyReveal>
  ) : (
    <ul className={isMobile ? 'flex flex-col gap-4' : 'flex gap-6'}>
      {listItems}
    </ul>
  );
}