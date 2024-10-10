import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Comment fonctionne MultiChange ?",
    answer: "MultiChange est une application de transfert d'argent mobile qui vous permet d'envoyer de l'argent instantanément à travers le monde. Téléchargez l'application, créez un compte, ajoutez des fonds et commencez à envoyer de l'argent en quelques clics."
  },
  {
    question: "Quels sont les frais de transfert ?",
    answer: "Nos frais varient en fonction du montant envoyé et du pays de destination. Nous nous efforçons de maintenir des frais compétitifs et transparents. Vous pouvez voir les frais exacts avant de confirmer chaque transfert."
  },
  {
    question: "Combien de temps prend un transfert ?",
    answer: "La plupart de nos transferts sont instantanés. Cependant, dans certains cas, cela peut prendre jusqu'à 24 heures, selon le pays de destination et la méthode de paiement choisie."
  },
  {
    question: "MultiChange est-il sécurisé ?",
    answer: "Absolument. Nous utilisons un cryptage de niveau bancaire pour protéger vos données et votre argent. De plus, nous sommes conformes à toutes les réglementations financières internationales."
  },
  {
    question: "Dans quels pays puis-je envoyer de l'argent ?",
    answer: "MultiChange permet d'envoyer de l'argent dans plus de 100 pays à travers le monde. Vous pouvez consulter la liste complète des pays disponibles dans l'application."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-indigo-800"
        >
          Questions <span className="text-purple-600">Fréquentes</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-semibold text-indigo-800 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-purple-600" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-2 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-inner"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;