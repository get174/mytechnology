import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Plateforme E-Commerce Africaine',
    description: 'Solution complète de commerce électronique pour les petits commerçants',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Application Mobile Bancaire',
    description: 'Application mobile sécurisée pour services financiers numériques',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Firebase', 'Security'],
  },
  {
    title: 'Système de Gestion d\'Inventaire',
    description: 'Logiciel de gestion complète pour petites et moyennes entreprises',
    image: 'https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Chatbot WhatsApp Intelligent',
    description: 'Système d\'automatisation pour support client 24/7 sur WhatsApp',
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'WhatsApp API', 'AI/ML'],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-96 rounded-2xl overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-200 mb-4">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-orange-500/30 border border-orange-400/50 text-orange-200 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
          Voir plus <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {2020 + index}
      </div>
    </motion.div>
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
          <div className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-medium tracking-wider">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Projets qui marchent
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Chaque projet a un objectif business. Voici les résultats que nous avons livrés.
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
