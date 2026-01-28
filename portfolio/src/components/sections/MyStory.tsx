import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Rocket, Target, Heart } from 'lucide-react';

export function MyStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="my-story" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">My Story</h2>
        <p className="section-subtitle mb-12">
          Where I come from, what drives me, and where I'm headed.
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Where I'm From
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I'm from <span className="text-text-primary font-medium">Houston, Texas</span>,
                a city that shaped my early curiosity for technology and science. Growing up in Houston,
                surrounded by the energy industry, the Texas Medical Center, and NASA, I was exposed to
                the intersection of engineering and real-world impact from an early age. This environment
                sparked my passion for building things that matter. I came to Duke because of its unique
                ability to blend rigorous engineering with entrepreneurship and interdisciplinary thinking—a
                combination that aligned perfectly with my goal of creating technology that solves meaningful problems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Academic Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-violet/10 text-violet shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                My Academic Path
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I'm pursuing a dual degree in <span className="text-text-primary font-medium">Electrical & Computer Engineering
                (AI/ML concentration)</span> and <span className="text-text-primary font-medium">Biomedical Engineering</span>,
                along with a <span className="text-accent font-medium">Certificate in Innovation & Entrepreneurship</span>.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I chose this combination because I believe the most impactful innovations happen at the intersection
                of disciplines. ECE gives me the technical foundation in AI/ML and systems thinking. BME connects
                my work to healthcare and human impact. And the I&E Certificate teaches me how to take ideas from
                concept to reality—how to build ventures, not just technology. Together, these prepare me to create
                solutions that are technically excellent, humanly meaningful, and commercially viable.
              </p>
            </div>
          </div>
        </motion.div>

        {/* I&E and Long-term Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                I&E and My Long-Term Plans
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Innovation & Entrepreneurship certificate is central to my career vision. My long-term goal
                is to build technology companies that solve problems at the intersection of
                <span className="text-text-primary font-medium"> AI, healthcare, and consumer technology</span>.
                The I&E coursework has given me frameworks for customer discovery, venture design, and scaling—skills
                that complement my technical abilities.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Programs like <span className="text-accent font-medium">Duke in Silicon Valley</span> exposed me
                to founders, VCs, and product leaders at companies like OpenAI, Google, Apple, and Sequoia Capital.
                These experiences reinforced my belief that technical excellence alone isn't enough—you need to
                understand markets, users, and how to build teams that execute.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Current Ventures */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-violet/10 text-violet shrink-0">
              <Rocket size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Current Entrepreneurial Ventures
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I'm currently the <span className="text-text-primary font-medium">Founder & Full-Stack Engineer
                at Trybl</span>, a mobile platform helping Duke students discover resources, events, and connect
                with peers. We've grown to 186+ users through campus partnerships with freshman orientation,
                student organizations, and the cultural center. I lead a team of 10+ people across product,
                engineering, and operations.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Previously, I co-founded <span className="text-text-primary font-medium">Resonate</span>, a
                cross-platform mobile app where I shipped 6 features and acquired 80 beta users in just 2 weeks.
                These ventures taught me that entrepreneurship is about iteration, user feedback, and relentless execution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card border-accent/30 bg-gradient-to-r from-accent/5 to-violet/5"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/20 text-accent shrink-0">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                The Impact I Hope to Have
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Since I was a kid, I've believed I was meant to help change the world. I don't just want to build
                things that work—I want to build things that <span className="text-accent font-medium">matter</span>.
                My goal is to create technology that democratizes access to healthcare, education, and opportunity.
                Whether it's AI systems that help doctors make better decisions, platforms that connect students to
                resources, or tools that make complex technology accessible to everyone—I want my work to leave
                the world better than I found it. The connection I create between people through technology is what
                drives me most.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
