import { motion } from 'framer-motion';
import { Code, Cpu, MessageSquareText, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Sparkles,
    title: 'GlockCleaner',
    description: 'Nettoyez, optimisez et améliorez les performances de votre PC.',
    color: 'from-[#1E5BFF] to-[#123FC4]',
  },
  {
    icon: Code,
    title: 'Plateformes Web',
    description: 'Sites vitrine, solutions SaaS et dashboards premium conçus pour convertir et rassurer.',
    color: 'from-[#3a73ff] to-[#123fc4]',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Expérience fluide sur iOS et Android, pensée pour la simplicité et la performance.',
    color: 'from-[#7aa5ff] to-[#1e5bff]',
  },
  {
    icon: Cpu,
    title: 'Systèmes sur Mesure',
    description: 'Logiciels de gestion complet, automatisation, reporting et optimisation des processus.',
    color: 'from-[#4d7eff] to-[#123fc4]',
  },
  {
    icon: MessageSquareText,
    title: 'WhatsApp Business',
    description: 'Automatisation intelligente du service client et de la relation commerciale 24/7.',
    color: 'from-[#6d8cff] to-[#1e5bff]',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & Audit',
    description: 'Protection des données, audits de sécurité et conformité pour une fiabilité maximum.',
    color: 'from-[#8ca8ff] to-[#3d66da]',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0a162b] to-[#07142f] overflow-hidden transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_20px_60px_rgba(18,63,196,0.18)] hover:scale-[1.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(30,91,255,0.16),_transparent_30%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-800/25`}>
            <service.icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-slate-300 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 mb-6">
            <span className="text-blue-200 text-sm font-medium tracking-[0.2em] uppercase">
              Nos solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-[-0.04em]">
            <span className="gradient-text">Technologie au service de vos performances</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Des solutions conçues pour simplifier les usages, protéger les données et accélérer les résultats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
