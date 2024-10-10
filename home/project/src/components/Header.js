import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(79, 70, 229, 0)', 'rgba(255, 255, 255, 1)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 1)', 'rgba(79, 70, 229, 1)']
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ['Fonctionnalités', 'Comment ça marche', 'Témoignages', 'FAQ'];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <motion.header
      style={{ background: headerBackground }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div style={{ color: textColor }} className="flex items-center">
          <img src="/logo.png" alt="MultiChange Logo" className="h-10 w-10 mr-3" />
          <span className="text-2xl font-bold">MultiChange</span>
        </motion.div>
        
        {/* Menu pour desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ color: textColor }}
                  className="hover:text-indigo-300 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bouton hamburger pour mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }}>
            {isMenuOpen ? (
              <X size={24} style={{ color: textColor }} />
            ) : (
              <Menu size={24} style={{ color: textColor }} />
            )}
          </motion.div>
        </button>
      </div>

      {/* Menu mobile */}
      <motion.nav
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white shadow-lg"
      >
        <ul className="py-4">
          {menuItems.map((item) => (
            <li key={item} className="px-4 py-2">
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-indigo-600 hover:text-indigo-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;