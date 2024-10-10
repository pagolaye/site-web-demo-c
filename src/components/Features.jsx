import React from 'react';
import { Zap, Lock, Globe, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Zap, title: "Transferts Instantanés", description: "Envoyez de l'argent en quelques secondes, pas en jours.", color: "from-red-500 to-red-600" },
  { icon: Lock, title: "Sécurité Bancaire", description: "Votre argent et vos données sont toujours protégés.", color: "from-blue-500 to-blue-600" },
  { icon: Globe, title: "Portée Mondiale", description: "Transférez vers plus de 100 pays dans le monde.", color: "from-orange-500 to-orange-600" },
  { icon: CreditCard, title: "Options de Paiement Multiples", description: "Liez votre compte bancaire, votre carte, ou utilisez de l'argent liquide.", color: "from-cyan-500 to-cyan-600" },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Pourquoi Choisir <span className="text-blue-600">MultiChange</span> ?
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${feature.color} p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300`}
            >
              <feature.icon className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;