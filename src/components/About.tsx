import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timeline = [
  {
    year: '2020',
    title: 'Premier Code',
    description: 'Premier projet livré: système de gestion pour un commerce à Kinshasa. Le client a augmenté ses ventes de 40%.',
  },
  {
    year: '2021',
    title: '20+ Clients',
    description: 'Plateforme e-commerce pour AfroCommerce. 500+ commandes le premier mois.',
  },
  {
    year: '2022',
    title: 'Équipe Locale',
    description: '4 développeurs, 2 designers. Premier système bancaire digital en RDC.',
  },
  {
    year: '2024',
    title: 'Scale',
    description: '40+ projets livrés. Présence dans 5 pays africains. 2 millions USD de revenus clients générés.',
  },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex gap-8 mb-12 items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
    >
      <div className="flex-1">
        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
          <div className="text-orange-400 text-sm font-bold mb-2">{item.year}</div>
          <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-gray-400">{item.description}</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 relative z-10" />
        {index < timeline.length - 1 && (
          <div className="w-1 h-24 bg-gradient-to-b from-orange-500 to-transparent mt-2" />
        )}
      </div>

      <div className="flex-1" />
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-medium tracking-wider">
              NOTRE HISTOIRE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Conçu en Afrique, livré pour le monde
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {timeline.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
