import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import LazyReveal from './utils/LazyReveal';
import NavLinks from './NavLinks';

export default function Navbar() {
  const routes = [
    { name: 'Beranda', to: '/' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Skills', to: '/#skills' },
    { name: 'Pengalaman', to: '/#experiences'},
    { name: 'Kontak', to: '/contact' },
  ];

  const [isToggled, setToggle] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!isToggled) return;

    const handleClickOutside = (e) => {
      if (
        navRef.current && !navRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isToggled]);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-3 max-w-screen-xl mx-auto">

        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="font-bold text-4xl text-primer">MAH</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 px-4 relative">
          <NavLinks routes={routes} />
        </ul>

        {/* Mobile Nav */}
        <div className="md:hidden relative">
          <button ref={btnRef} onClick={() => setToggle((p) => !p)} className="p-2">
            {isToggled ? '✕' : '☰'}
          </button>

          <AnimatePresence>
            {isToggled && (
              <motion.ul ref={navRef} key="mobile-menu"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute right-1 top-full mt-2 bg-white z-50 shadow border rounded p-4"
              >
                <NavLinks routes={routes} isMobile useLazyReveal onLinkClick={() => setToggle(false)} />
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}