import { motion } from 'framer-motion';
import { Code, Smartphone, Cpu, MessageCircle, Shield } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Sites et applications web personnalisés avec les dernières technologies',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Applications mobiles natives et multiplateformes pour iOS et Android',
    color: 'from-orange-600 to-orange-700',
  },
  {
    icon: Cpu,
    title: 'Logiciels Personnalisés',
    description: 'Solutions logicielles sur mesure adaptées à vos besoins métier',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: MessageCircle,
    title: 'Automatisation WhatsApp',
    description: 'Chatbots intelligents et automatisation pour engagement client',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Solutions de sécurité complètes pour protéger vos actifs numériques',
    color: 'from-red-500 to-orange-500',
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
      <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/5 group-hover:to-yellow-500/5 transition-all duration-500" />

        <div className="relative z-10">
          <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
            <service.icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300">
            {service.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          <div className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-medium tracking-wider">
              NOS SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Ce que Nous Faisons
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Solutions technologiques complètes conçues pour propulser votre entreprise vers l'avenir
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
