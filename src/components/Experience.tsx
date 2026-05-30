import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative p-16 rounded-3xl bg-gradient-to-br from-gray-900/50 via-orange-900/30 to-yellow-900/30 border border-orange-500/30 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-orange-500/5 to-yellow-500/5 animate-pulse" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-8">
                <span className="text-orange-400 text-sm font-medium tracking-wider">
                  BIENVENUE À L'EXPÉRIENCE
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Transformer l'Afrique
              </span>
              <br />
              <span className="text-white">par la Technologie</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              MyTechnology est née à Kinshasa avec une mission simple :
              créer des solutions logicielles qui ne se contentent pas de répondre
              aux attentes, mais les dépassent. De applications mobiles aux systèmes d'entreprise,
              nous pionniers l'innovation technologique africain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 backdrop-blur-sm">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-300">Projets Livrés</div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 backdrop-blur-sm">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-gray-300">Satisfaction Clients</div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/30 to-orange-800/20 border border-orange-500/30 backdrop-blur-sm">
                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Support Disponible</div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </div>
    </section>
  );
}
