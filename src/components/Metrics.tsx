import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  {
    value: '40+',
    label: 'Projets livrés',
    detail: 'E-commerce, apps, systèmes',
  },
  {
    value: '5',
    label: 'Pays africains',
    detail: 'RDC, Congo, Cameroun, Côte d\'Ivoire, Sénégal',
  },
  {
    value: '2M$',
    label: 'Revenus générés',
    detail: 'Pour nos clients en 2024',
  },
  {
    value: '24h',
    label: 'Délai de réponse',
    detail: 'Premier contact sous 24h',
  },
];

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 px-4 border-y border-white/10 bg-[#07142f]/40">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-4"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-1">{metric.label}</div>
              <div className="text-slate-400 text-sm">{metric.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
