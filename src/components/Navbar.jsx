import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  const routes = [
    { name: 'Beranda', to: '/' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Kontak', to: '/contact' },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
      <ul className="flex justify-center gap-6 p-4 relative">
        {routes.map((route) => (
          <li key={route.to} className="relative">
            <NavLink
              to={route.to}
              end={route.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 text-md font-bold border-b border-transparent transition duration-300 ${
                  isActive ? 'text-primer' : 'text-sekunder hover:text-primer hover:border-b-2 hover:border-primer hover:scale-105'
                }`
              }
            >
              {route.name}
              {location.pathname === route.to && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-2 h-0.5 w-full bg-primer"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}