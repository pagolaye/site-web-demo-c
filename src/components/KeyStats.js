import React from 'react';
import { Users, Smartphone, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: "200k+", label: "Clients satisfaits" },
  { icon: Smartphone, value: "5+", label: "Mobile money supportés" },
  { icon: Clock, value: "24/7", label: "Support client" },
];

const KeyStats = () => {
  console.log("KeyStats component is rendering"); // Ajout d'un log pour le débogage
  return (
    <section className="py-16 bg-red-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Chiffres Clés (Debug)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="h-16 w-16 mb-4" />
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-xl text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStats;