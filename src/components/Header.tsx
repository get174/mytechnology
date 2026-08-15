import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#services' },
    { label: 'Produits', href: '#projects' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-40 border-b border-white/10 bg-[#030814]/70 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
          <img src="/assets/logo1.jpeg" alt="MyTech logo" className="h-10 w-auto" />
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="premium-button px-6 py-2.5 rounded-full font-semibold text-white"
          >
            Nous contacter
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-blue-300 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 bg-[#061426]/90"
        >
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full premium-button px-6 py-2.5 rounded-full font-semibold text-white text-center"
            >
              Nous contacter
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
