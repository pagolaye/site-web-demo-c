import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
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
        <nav>
          <ul className="flex space-x-8">
            {['Fonctionnalités', 'Comment ça marche', 'Témoignages', 'FAQ'].map((item) => (
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
      </div>
    </motion.header>
  );
};

export default Header;