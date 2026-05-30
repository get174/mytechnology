import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-8"
          >
            <span className="text-orange-400 text-sm font-medium tracking-wider">
              BIENVENUE À MYTECHNOLOGY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Nous Construisons l'Avenir
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              de la Technologie
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Depuis le centre de l'Afrique vers le monde. Solutions technologiques innovantes qui transforment les entreprises africaines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#services"
              className="group relative px-8 py-4 rounded-lg font-bold text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="relative flex items-center justify-center gap-2">
                Explorer l'Expérience
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </div>
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-lg font-bold text-white border border-orange-500/50 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300"
            >
              Nous Contacter
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="relative h-96 rounded-2xl overflow-hidden border border-orange-500/30 backdrop-blur-sm bg-gradient-to-br from-gray-900 to-black p-8">
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(249,115,22,0.1)" strokeWidth="1"/>
                </pattern>
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316"/>
                  <stop offset="100%" stopColor="#fbbf24"/>
                </linearGradient>
              </defs>
              <rect width="400" height="300" fill="url(#grid)"/>

              {/* Central server/tech node */}
              <motion.circle cx="200" cy="150" r="40" fill="none" stroke="url(#orangeGrad)" strokeWidth="2"
                animate={{ r: [40, 45, 40], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}/>
              <motion.circle cx="200" cy="150" r="30" fill="rgba(249,115,22,0.2)" stroke="#f97316" strokeWidth="1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}/>
              <text x="200" y="155" textAnchor="middle" fill="#f97316" fontSize="20" fontWeight="bold">&lt;/&gt;</text>

              {/* Orbiting elements */}
              <motion.circle cx="280" cy="100" r="8" fill="#f97316"
                animate={{ cx: [280, 300, 280], cy: [100, 80, 100] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}/>
              <motion.circle cx="120" cy="200" r="6" fill="#fbbf24"
                animate={{ cx: [120, 100, 120], cy: [200, 220, 200] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}/>
              <motion.circle cx="300" cy="220" r="10" fill="#f97316"
                animate={{ cx: [300, 320, 300], cy: [220, 240, 220] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}/>
              <motion.circle cx="100" cy="80" r="5" fill="#fbbf24"
                animate={{ cx: [100, 80, 100], cy: [80, 60, 80] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}/>

              {/* Connection lines */}
              <motion.line x1="200" y1="150" x2="280" y2="100" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3"
                animate={{ strokeOpacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}/>
              <motion.line x1="200" y1="150" x2="120" y2="200" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3"
                animate={{ strokeOpacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}/>
              <motion.line x1="200" y1="150" x2="300" y2="220" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3"
                animate={{ strokeOpacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}/>
              <motion.line x1="200" y1="150" x2="100" y2="80" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3"
                animate={{ strokeOpacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}/>

              {/* Floating code brackets */}
              <motion.text x="50" y="150" fill="#f97316" fontSize="24" fontFamily="monospace" opacity="0.5"
                animate={{ x: [50, 60, 50], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}>{'{'}</motion.text>
              <motion.text x="340" y="150" fill="#f97316" fontSize="24" fontFamily="monospace" opacity="0.5"
                animate={{ x: [340, 330, 340], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}>{'}'}</motion.text>

              {/* Bottom tech waves */}
              <motion.path d="M0 280 Q50 260 100 280 T200 280 T300 280 T400 280" fill="none" stroke="#f97316" strokeWidth="2" strokeOpacity="0.2"
                animate={{ d: ["M0 280 Q50 260 100 280 T200 280 T300 280 T400 280", "M0 280 Q50 300 100 280 T200 280 T300 280 T400 280"] }}
                transition={{ duration: 3, repeat: Infinity }}/>
            </svg>
          </div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full blur-3xl"
          />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-orange-400" />
      </motion.div>
    </section>
  );
}
