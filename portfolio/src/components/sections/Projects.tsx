import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects, categories } from '../../data/projects';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredProjects = activeCategory
    ? otherProjects.filter((p) => p.category === activeCategory)
    : otherProjects;

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mb-12">
          A selection of work across software, AI/ML, biomedical engineering, and research.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="mb-16">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2"
        >
          <span className="w-8 h-px bg-accent" />
          Featured
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        categories.find((c) => c.id === project.category)?.color
                      }`}
                    />
                    <span className="text-xs text-text-muted uppercase tracking-wide">
                      {categories.find((c) => c.id === project.category)?.label}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                </div>
                {project.metrics && (
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium shrink-0">
                    {project.metrics}
                  </span>
                )}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.longDescription || project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-surface-hover text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
                <span className="ml-auto text-text-muted group-hover:text-accent transition-colors flex items-center gap-1 text-sm">
                  Learn more <ChevronRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mb-8"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-accent" />
          More Projects
        </h3>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === null
                ? 'bg-accent text-white'
                : 'bg-surface hover:bg-surface-hover text-text-secondary'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-surface hover:bg-surface-hover text-text-secondary'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${category.color}`} />
              {category.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
            className="card group cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-2 h-2 rounded-full ${
                  categories.find((c) => c.id === project.category)?.color
                }`}
              />
              <span className="text-xs text-text-muted">
                {categories.find((c) => c.id === project.category)?.label}
              </span>
              {project.metrics && (
                <span className="ml-auto text-xs text-accent">{project.metrics}</span>
              )}
            </div>

            <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
              {project.title}
            </h4>

            <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-surface-hover text-text-muted"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs px-2 py-0.5 text-text-muted">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
