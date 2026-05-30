import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative border-t border-orange-500/10 bg-black/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/logo.jpg" alt="MyTechnology" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400">
              Transformons l'Afrique par la technologie, ensemble.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Développement Web</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Applications Mobiles</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Cybersécurité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">À Propos</a></li>
              <li><a href="#projects" className="hover:text-orange-400 transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Suivez-Nous</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/10 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} MyTechnology. Tous droits réservés.</p>
        </div>
      </div>

      <a
        href="https://wa.me/243XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-green-500/50 z-50"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.016-4.753 5.521-4.753 9.172 0 1.3.259 2.55.744 3.74L2.365 21.75l3.828-1.194c1.088.594 2.351.928 3.682.928 5.514 0 10-4.486 10-10S17.515 1.675 12 1.675c-4.587 0-8.583 3.325-9.253 7.533" />
        </svg>
      </a>
    </motion.footer>
  );
}
