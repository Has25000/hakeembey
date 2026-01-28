import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Hakeemashittabey@gmail.com',
      href: 'mailto:Hakeemashittabey@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hakeem-bey',
      href: 'https://linkedin.com/in/hakeem-bey',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com',
      href: 'https://github.com',
    },
  ];

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle mx-auto mb-12">
          I'm always interested in hearing about new opportunities, collaborations, or just connecting
          with people who are building interesting things.
        </p>

        <motion.a
          href="mailto:Hakeemashittabey@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="btn-primary text-lg px-8 py-4 mb-12 inline-flex"
        >
          <Mail size={20} />
          Say Hello
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="card group text-center hover:border-accent/50"
            >
              <div className="inline-flex p-3 rounded-lg bg-surface-hover group-hover:bg-accent/10 transition-colors mb-3">
                <link.icon
                  size={24}
                  className="text-text-muted group-hover:text-accent transition-colors"
                />
              </div>
              <p className="text-text-primary font-medium mb-1 flex items-center justify-center gap-1">
                {link.label}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </p>
              <p className="text-text-muted text-sm truncate">{link.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className="text-text-muted text-sm">
          Open to full-time opportunities, internships, and interesting projects.
        </p>
      </motion.div>
    </section>
  );
}
