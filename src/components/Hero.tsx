import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,91,255,0.2),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(18,63,196,0.18),_transparent_30%)]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 text-blue-200 text-xs font-medium tracking-[0.18em] uppercase mb-8"
          >
            MyTech • Innovation & protection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-[0.95] mb-6 tracking-[-0.04em]"
          >
            Technology at
            <br />
            <span className="gradient-text">Hand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            MyTech conçoit des solutions technologiques modernes pour simplifier, protéger et améliorer votre quotidien numérique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="premium-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white"
            >
              Découvrir nos solutions
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white border border-blue-400/25 bg-white/5 hover:border-blue-300/40 hover:bg-blue-500/10 transition-all duration-300"
            >
              Nous contacter
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[480px] rounded-[32px] border border-blue-400/20 bg-gradient-to-br from-[#0b1733] via-[#08142d] to-[#050d1d] p-8 soft-shadow overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(124,141,175,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(124,141,175,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#123fc4]/20 blur-3xl" />

            <svg className="relative w-full h-full" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(124,141,175,0.18)" strokeWidth="1"/>
                </pattern>
                <linearGradient id="techBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E5BFF"/>
                  <stop offset="100%" stopColor="#123FC4"/>
                </linearGradient>
              </defs>

              <rect width="420" height="300" fill="url(#grid)" rx="20" />

              <motion.circle cx="210" cy="150" r="52" fill="none" stroke="url(#techBlue)" strokeWidth="2.5"
                animate={{ r: [52, 58, 52], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2.8, repeat: Infinity }} />
              <motion.circle cx="210" cy="150" r="36" fill="rgba(30,91,255,0.14)" stroke="#1E5BFF" strokeWidth="1.5"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.8, repeat: Infinity }} />
              <text x="210" y="158" textAnchor="middle" fill="#DDE8FF" fontSize="22" fontWeight="700">&lt;/&gt;</text>

              <motion.circle cx="298" cy="88" r="9" fill="#1E5BFF"
                animate={{ cx: [298, 320, 298], cy: [88, 72, 88] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.circle cx="110" cy="212" r="7" fill="#8FA7FF"
                animate={{ cx: [110, 95, 110], cy: [212, 228, 212] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.circle cx="326" cy="214" r="11" fill="#123FC4"
                animate={{ cx: [326, 344, 326], cy: [214, 236, 214] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.circle cx="90" cy="98" r="6" fill="#BACBFF"
                animate={{ cx: [90, 72, 90], cy: [98, 78, 98] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }} />

              <motion.line x1="210" y1="150" x2="298" y2="88" stroke="#1E5BFF" strokeWidth="1.5" strokeOpacity="0.35"
                animate={{ strokeOpacity: [0.3, 0.7, 0.3] }} transition={{ duration: 1.8, repeat: Infinity }} />
              <motion.line x1="210" y1="150" x2="110" y2="212" stroke="#1E5BFF" strokeWidth="1.5" strokeOpacity="0.3"
                animate={{ strokeOpacity: [0.3, 0.7, 0.3] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.2 }} />
              <motion.line x1="210" y1="150" x2="326" y2="214" stroke="#1E5BFF" strokeWidth="1.5" strokeOpacity="0.3"
                animate={{ strokeOpacity: [0.3, 0.7, 0.3] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
              <motion.line x1="210" y1="150" x2="90" y2="98" stroke="#1E5BFF" strokeWidth="1.5" strokeOpacity="0.3"
                animate={{ strokeOpacity: [0.3, 0.7, 0.3] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }} />

              <motion.text x="50" y="160" fill="#8FA7FF" fontSize="26" fontFamily="monospace" opacity="0.6"
                animate={{ x: [50, 62, 50], opacity: [0.45, 0.8, 0.45] }} transition={{ duration: 3.2, repeat: Infinity }}>{'{'}</motion.text>
              <motion.text x="342" y="160" fill="#8FA7FF" fontSize="26" fontFamily="monospace" opacity="0.6"
                animate={{ x: [342, 332, 342], opacity: [0.45, 0.8, 0.45] }} transition={{ duration: 3.2, repeat: Infinity }}>{'}'}</motion.text>

              <motion.path d="M0 252 Q90 220 170 252 T330 252 T420 252" fill="none" stroke="#1E5BFF" strokeWidth="2" strokeOpacity="0.2"
                animate={{ d: ['M0 252 Q90 220 170 252 T330 252 T420 252', 'M0 252 Q90 270 170 252 T330 252 T420 252'] }} transition={{ duration: 3, repeat: Infinity }} />
            </svg>
          </div>

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -right-8 w-44 h-44 rounded-full bg-gradient-to-br from-blue-500/25 to-[#123fc4]/20 blur-3xl"
          />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-blue-300" />
      </motion.div>
    </section>
  );
}
