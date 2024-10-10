import React, { useState } from 'react';
import { Zap, Lock, Globe, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Zap, title: "Transferts Instantanés", description: "Envoyez de l'argent en quelques secondes, pas en jours.", color: "from-blue-600 to-purple-600" },
  { icon: Lock, title: "Sécurité Bancaire", description: "Votre argent et vos données sont toujours protégés.", color: "from-purple-600 to-pink-500" },
  { icon: Globe, title: "Portée Mondiale", description: "Transférez vers plus de 100 pays dans le monde.", color: "from-pink-500 to-red-500" },
  { icon: CreditCard, title: "Options de Paiement Multiples", description: "Liez votre compte bancaire, votre carte, ou utilisez de l'argent liquide.", color: "from-red-500 to-yellow-500" },
];

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-gradient-to-br ${feature.color} p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <feature.icon className="h-12 w-12 text-white" />
      </motion.div>
      <motion.h3
        className="text-xl font-semibold mb-2 text-white"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {feature.title}
      </motion.h3>
      <motion.p
        className="text-white text-opacity-80"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Pourquoi Choisir{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          >
            MultiChange
          </motion.span>
          ?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;