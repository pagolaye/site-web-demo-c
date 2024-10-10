import React from 'react';
import { motion } from 'framer-motion';
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
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Questions <span className="text-indigo-600">Fréquentes</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 p-4 bg-indigo-50 rounded-lg"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;