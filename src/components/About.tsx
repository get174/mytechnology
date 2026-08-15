import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timeline = [
  {
    year: '2020',
    title: 'Premier Code',
    description: 'Nous avons lancé nos premiers projets en mettant l’expérience utilisateur et la fiabilité au centre de chaque solution.',
  },
  {
    year: '2021',
    title: '20+ Clients',
    description: 'Nous avons accompagné des entreprises avec des plateformes performantes et des outils de gestion adaptés à leurs besoins.',
  },
  {
    year: '2022',
    title: 'Équipe Locale',
    description: 'Une équipe de passionnés a renforcé notre capacité à concevoir des systèmes fiables, sécurisés et scalables.',
  },
  {
    year: '2024',
    title: 'Scale',
    description: 'MyTech a désormais une présence solide dans plusieurs marchés africains avec des produits pensés pour durer.',
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
        <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#081a31] to-[#0a152b]">
          <div className="text-blue-300 text-sm font-bold mb-2">{item.year}</div>
          <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-slate-300">{item.description}</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#1E5BFF] to-[#123FC4] relative z-10" />
        {index < timeline.length - 1 && (
          <div className="w-1 h-24 bg-gradient-to-b from-[#1E5BFF] to-transparent mt-2" />
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
          <div className="inline-block px-6 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 mb-6">
            <span className="text-blue-200 text-sm font-medium tracking-[0.2em] uppercase">
              Notre histoire
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-[-0.04em]">
            <span className="gradient-text">Conçu en Afrique, pensé pour le monde</span>
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
