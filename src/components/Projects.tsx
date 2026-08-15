import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'GlockCleaner',
    description: 'Nettoyez, optimisez et améliorez les performances de votre PC avec un outil rapide et fiable.',
    image: '/assets/glockcleaner.png',
    tags: ['Windows', 'Performance', 'Optimisation'],
    link: 'https://glockcleaner.com',
    year: 2024,
    featured: true,
  },
  {
    title: 'Exetat App',
    description: 'Plateforme de préparation aux examens d’État en RDC avec ressources pédagogiques et simulations.',
    image: '/assets/exetatapp.jpg',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
    link: 'https://exetatapp.com',
    year: 2025,
    featured: false,
  },
  {
    title: 'Système de Gestion d’Inventaire',
    description: 'Logiciel de gestion complète pour entreprises souhaitant mieux contrôler leur stock et leurs processus.',
    image: 'https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Python', 'PostgreSQL'],
    featured: false,
  },
  {
    title: 'Chatbot WhatsApp Intelligent',
    description: 'Système d’automatisation pour support client 24/7 avec réponses rapides et personnalisées.',
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'WhatsApp API', 'AI/ML'],
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.a
      href={project.link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as never}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-[430px] rounded-[28px] overflow-hidden cursor-pointer block border border-white/10 bg-[#07142f]"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-[#030814]/70 to-transparent opacity-90" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="inline-flex px-3 py-1.5 rounded-full border border-blue-300/25 bg-blue-500/10 text-blue-100 text-xs font-medium uppercase tracking-[0.18em]">
            {project.featured ? 'Produit phare' : 'Solution'}
          </div>
          <div className="px-3 py-1.5 rounded-full bg-[#07142f]/80 border border-white/10 text-slate-100 text-xs font-semibold">
            {project.year || (2020 + index)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-200 mb-4 max-w-md">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-blue-300/20 bg-blue-500/10 text-blue-100 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
            {project.link ? 'Découvrir le produit' : 'Voir plus'} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-4">
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
              Produits
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-[-0.04em]">
            <span className="gradient-text">Des solutions qui font la différence</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            MyTech développe des outils concrets pour améliorer la productivité, la sécurité et la confiance numérique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
