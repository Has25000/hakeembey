import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../../data/experience';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-container bg-surface/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle mb-12">
          Where I've worked and what I've built along the way.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? '' : 'md:direction-rtl'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1 md:-translate-x-1.5 mt-6 ring-4 ring-background" />

              {/* Content card */}
              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'
                }`}
              >
                <div className="card">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-text-primary">
                          {exp.company}
                        </h3>
                        {exp.highlight && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium">
                            {exp.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-accent font-medium">{exp.role}</p>
                      <p className="text-text-muted text-sm">
                        {exp.location} · {exp.period}
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-surface-hover">
                      <Briefcase size={20} className="text-text-muted" />
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.slice(0, 2).map((item, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-surface-hover text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
