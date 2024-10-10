import React from 'react';
import { Smartphone, Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
  ];

  const contactInfo = [
    { Icon: Mail, info: "contact@amogotech.com" },
    { Icon: Phone, info: "+33 1 23 45 67 89" },
    { Icon: MapPin, info: "123 Rue du Commerce, 75015 Paris" },
  ];

  const quickLinks = [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Comment ça marche", href: "#comment-ca-marche" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <Smartphone className="h-10 w-10 text-yellow-300 mr-3" />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
                AMOGO Tech
              </span>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Transformez vos transferts d'argent avec notre solution rapide, sécurisée et abordable.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-200 hover:text-yellow-300 transition duration-300 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactInfo.map(({ Icon, info }, index) => (
                <li key={index} className="flex items-center text-gray-200">
                  <Icon className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Téléchargez l'App</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="inline-block transition-transform duration-300 hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#" className="inline-block transition-transform duration-300 hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t border-white border-opacity-20 pt-8 text-center"
        >
          <p className="text-sm text-gray-300">
            © 2023 AMOGO Tech. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;