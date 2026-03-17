import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Rocket, Users } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Duke University',
      description: 'ECE (AI/ML), BME + I&E Certificate - Class of 2026',
    },
    {
      icon: Rocket,
      title: 'Founder',
      description: 'Built Trybl — grew to 174 users, pivoted, rescaling with 44 active users',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Alpha Phi Alpha, NSBE, ColorStack',
    },
  ];

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle mb-12">
          A quick look at who I am and what drives me.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-text-secondary leading-relaxed">
            I've always believed I was meant to help change the world. That belief shapes how I live,
            how I work, and how I connect with people. I don't just want to build things that work
            I want to build things that <span className="text-text-primary font-medium">matter</span>.
          </p>
          <p className="text-text-secondary leading-relaxed">
            At Duke, I'm pursuing a unique combination of{' '}
            <span className="text-text-primary font-medium">Electrical & Computer Engineering</span> (AI/ML focus),{' '}
            <span className="text-text-primary font-medium">Biomedical Engineering</span>, and{' '}
            a <span className="text-text-primary font-medium">Certificate in Innovation & Entrepreneurship</span>. This interdisciplinary
            background lets me tackle problems from multiple angles whether it's building ML pipelines,
            designing medical devices, or shipping full-stack applications.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Beyond the technical, I care deeply about leadership and community. As a brother of
            Alpha Phi Alpha Fraternity and an Annexstad Family Foundation Scholar, I've learned that
            the most impactful work happens when you bring people together and build with purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="card flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-6 p-4 rounded-lg border border-accent/20 bg-accent/5"
          >
            <p className="text-sm text-text-secondary">
              <span className="text-accent font-medium">Duke in Silicon Valley '25</span>: Engaged with
              leaders from OpenAI, Google, Apple, Sequoia Capital, and more on product-market fit,
              scaling, and innovation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
