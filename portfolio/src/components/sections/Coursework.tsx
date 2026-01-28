import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Lightbulb, Link2 } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  type: string;
  description: string;
  takeaways: string[];
}

const courses: Course[] = [
  {
    id: 'ie352',
    name: 'I&E 352: Founder\'s Workshop',
    type: 'Core Requirement',
    description: 'An intensive, hands-on course focused on the fundamentals of launching a venture. Covered customer discovery, MVP development, pitch creation, and early-stage startup operations.',
    takeaways: [
      'Learned to validate ideas through customer interviews before building—"get out of the building" mentality',
      'Developed skills in crafting compelling narratives and pitches that resonate with investors and users',
      'Understood the importance of iteration and pivoting based on real user feedback',
    ],
  },
  {
    id: 'capstone',
    name: 'I&E Capstone',
    type: 'Capstone Course',
    description: 'The culminating experience of the I&E Certificate, integrating learnings from all coursework into a comprehensive venture project. Applied frameworks from across the curriculum to a real entrepreneurial challenge.',
    takeaways: [
      'Synthesized technical skills with business strategy to create viable venture plans',
      'Practiced presenting to stakeholders and defending decisions under scrutiny',
      'Learned to balance vision with pragmatic execution and resource constraints',
    ],
  },
  {
    id: 'dsv',
    name: 'Duke in Silicon Valley',
    type: 'Gateway Elective',
    description: 'A competitive immersive program combining coursework in "Building and Sustaining a Successful Enterprise" with site visits to OpenAI, Google, Apple, Meta, Sequoia Capital, and other leading tech companies and venture firms.',
    takeaways: [
      'Gained firsthand exposure to how top companies think about product-market fit and scaling',
      'Networked with Duke alumni founders, PMs, and VCs—understanding different paths in tech',
      'Learned that culture and team dynamics are as important as technical excellence',
    ],
  },
  {
    id: 'bme-design',
    name: 'BME Design',
    type: 'Elective',
    description: 'Applied design thinking principles to biomedical engineering challenges. Worked through the full product development cycle from problem identification to prototyping and testing.',
    takeaways: [
      'Learned human-centered design principles and how to empathize with end users',
      'Gained experience with rapid prototyping and iterative design processes',
      'Understood regulatory and ethical considerations in healthcare innovation',
    ],
  },
];

export function Coursework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="coursework" className="section-container bg-surface/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">I&E Coursework</h2>
        <p className="section-subtitle mb-12">
          The courses that shaped my entrepreneurial thinking and toolkit.
        </p>
      </motion.div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="card"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-medium">
                  {course.type}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mt-2">
                  {course.name}
                </h3>
              </div>
              <div className="p-2 rounded-lg bg-surface-hover">
                <BookOpen size={20} className="text-text-muted" />
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {course.description}
            </p>

            <div className="space-y-2">
              <p className="text-xs text-text-muted uppercase tracking-wide flex items-center gap-1">
                <Lightbulb size={12} /> Key Takeaways
              </p>
              <ul className="space-y-2">
                {course.takeaways.map((takeaway, i) => (
                  <li key={i} className="text-text-secondary text-sm flex gap-2">
                    <span className="text-accent mt-1 shrink-0">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connections Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="card border-accent/30 bg-gradient-to-r from-accent/5 to-violet/5"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-accent/20 text-accent shrink-0">
            <Link2 size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Connecting the Dots
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The power of the I&E Certificate isn't in any single course—it's in how they connect.
              <span className="text-text-primary font-medium"> I&E 352</span> gave me the tactical skills
              of customer discovery and MVP development. <span className="text-text-primary font-medium">Duke in Silicon Valley</span>
              showed me what success looks like at scale and connected me with people building at the frontier.
              <span className="text-text-primary font-medium"> BME Design</span> grounded my work in human-centered
              thinking and real-world constraints. And the <span className="text-text-primary font-medium">Capstone</span>
              brought it all together.
            </p>
            <p className="text-text-secondary leading-relaxed">
              These courses directly informed my work on Trybl and Resonate. The customer discovery frameworks
              from I&E 352 shaped how I approached user research. The design thinking from BME Design influenced
              how I built features around user needs. And the exposure to Silicon Valley showed me what's possible
              when you combine technical excellence with entrepreneurial execution.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
