import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '../../data/skills';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-container bg-surface/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle mb-12">
          Technologies and tools I work with across different domains.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            className="card"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * categoryIndex + 0.03 * skillIndex,
                  }}
                  className="px-3 py-1.5 rounded-lg bg-surface-hover text-text-secondary text-sm hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 p-6 rounded-xl border border-border bg-gradient-to-r from-accent/5 to-violet/5"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Always Learning
            </h3>
            <p className="text-text-secondary text-sm">
              Currently exploring: Advanced RAG architectures, protein diffusion models, and real-time systems.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1.5 rounded-full bg-accent/20 text-accent">
              RAG
            </span>
            <span className="text-xs px-3 py-1.5 rounded-full bg-violet/20 text-violet">
              Diffusion
            </span>
            <span className="text-xs px-3 py-1.5 rounded-full bg-green-500/20 text-green-400">
              Real-time
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
