import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour, je m'appelle ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/243800690026?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 mb-6">
            <span className="text-blue-200 text-sm font-medium tracking-[0.2em] uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-[-0.04em]">
            <span className="gradient-text">Parlons de votre projet</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Décrivez votre besoin. Nous vous répondrons rapidement avec une solution adaptée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a152b] to-[#07142f] hover:border-blue-400/35 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#123fc4] to-[#1e5bff] group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-slate-300">info@mytechnology.dev</p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a152b] to-[#07142f] hover:border-blue-400/35 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#123fc4] to-[#1e5bff] group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                  <p className="text-slate-300">+243 800 690 026</p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a152b] to-[#07142f] hover:border-blue-400/35 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#123fc4] to-[#1e5bff] group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Localisation</h3>
                  <p className="text-slate-300">Kinshasa, République Démocratique du Congo</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-[#0c172b] text-white placeholder-slate-400 focus:border-blue-400/40 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-[#0c172b] text-white placeholder-slate-400 focus:border-blue-400/40 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Décrivez votre projet (type, fonctionnalités, budget approx.)"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-[#0c172b] text-white placeholder-slate-400 focus:border-blue-400/40 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full premium-button px-8 py-4 rounded-full font-semibold text-white"
            >
              <span className="flex items-center justify-center gap-2">
                Envoyer sur WhatsApp
                <Send className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
