import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jean-Pierre Kabongo',
    role: 'CEO, TechStart RDC',
    content: 'MyTechnology a transformé notre vision en réalité. Une équipe réactive et professionnelle qui comprend parfaitement les besoins africains.',
    rating: 5,
  },
  {
    name: 'Marie Ngalula',
    role: 'Directrice, AfroCommerce',
    content: 'Notre plateforme e-commerce a été livrée dans les délais avec une qualité exceptionnelle. Je recommande vivement leurs services.',
    rating: 5,
  },
  {
    name: 'Patrick Muzemwa',
    role: 'Fondateur, FinSecure Africa',
    content: 'L\'expertise en cybersécurité de MyTechnology nous a permis de sécuriser nos transactions. Un partenaire fiable.',
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-orange-500/20 backdrop-blur-sm"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-500/20" />

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-bold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-32 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
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
              ILS NOUS FONT CONFIANCE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Résultats réels
            </span>
            <br />
            <span className="text-white">Clients satisfaits</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Pas de discours. Des chiffres. Les résultats parlent d'eux-mêmes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
