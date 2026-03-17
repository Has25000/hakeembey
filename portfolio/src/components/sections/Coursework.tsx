import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Lightbulb, Link2 } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  type: string;
  description: string;
  whyChosen: string;
  takeaways: string[];
}

const courses: Course[] = [
  {
    id: 'ie352',
    name: 'I&E 352: Founder\'s Workshop',
    type: 'Core Requirement',
    description: 'An intensive, hands-on course focused on the fundamentals of launching a venture. Covered customer discovery, MVP development, pitch creation, and early-stage startup operations.',
    whyChosen: 'I chose Founder\'s Workshop because I wanted tactical, hands-on frameworks for turning ideas into real products. I knew I wanted to build ventures, not just study them, and this course promised to teach me the "get out of the building" approach to validation that I later applied directly to Trybl and Resonate.',
    takeaways: [
      'Learned to validate ideas through customer interviews before building, embracing the "get out of the building" mentality',
      'Developed skills in crafting compelling narratives and pitches that resonate with investors and users',
      'Understood the importance of iteration and pivoting based on real user feedback',
    ],
  },
  {
    id: 'capstone',
    name: 'I&E Capstone',
    type: 'Capstone Course',
    description: 'The capstone experience where I built Trybl as my venture project. I grew the platform to 174 users, managed a team of 10+, then made the hard decision to rebuild the entire tech stack and pivot the product based on user feedback. We\'re now rescaling with 44 active users on the new platform and have a summer meeting lined up with Duke Housing & Residence Life to explore institutional integration.',
    whyChosen: 'I chose the Capstone because it was the chance to go all-in on building Trybl within a structured framework. I wanted the accountability of presenting progress to advisors and peers while applying everything I\'d learned across my I&E coursework to a real venture with real users and real stakes.',
    takeaways: [
      'Learned that pivoting isn\'t failure — it\'s a sign you\'re listening to users and willing to make hard decisions for the right outcome',
      'Experienced the full emotional arc of building: growing to 174 users, tearing down the tech stack, and rebuilding with conviction',
      'Developed skills in execution at speed, growth strategy, team management, and relationship building with institutional stakeholders',
    ],
  },
  {
    id: 'dsv',
    name: 'Duke in Silicon Valley',
    type: 'Gateway Elective',
    description: 'A competitive immersive program combining coursework in "Building and Sustaining a Successful Enterprise" with site visits to OpenAI, Google, Apple, Meta, Sequoia Capital, and other leading tech companies and venture firms.',
    whyChosen: 'I chose Duke in Silicon Valley because I wanted to see what building at the highest level looks like. As someone planning to take Trybl full-time after graduation, I needed exposure to how top founders, PMs, and VCs think about scaling, product-market fit, and team building — lessons I couldn\'t get from a textbook.',
    takeaways: [
      'Gained firsthand exposure to how top companies think about product-market fit and scaling',
      'Networked with Duke alumni founders, PMs, and VCs, gaining insight into different paths in tech',
      'Learned that culture and team dynamics are as important as technical excellence',
    ],
  },
  {
    id: 'bme-design',
    name: 'BME Design',
    type: 'Elective',
    description: 'Applied design thinking principles to biomedical engineering challenges. Worked through the full product development cycle from problem identification to prototyping and testing.',
    whyChosen: 'I chose BME Design because I wanted to ground my engineering work in human-centered thinking. Building consumer products like Trybl requires deep empathy for users, and this course taught me systematic approaches to understanding user needs, rapid prototyping, and iterating based on real feedback — all skills I use daily as a founder.',
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

            <div className="mb-4 p-3 rounded-lg bg-violet/5 border border-violet/20">
              <p className="text-xs text-violet font-medium uppercase tracking-wide mb-1">Why I Chose This Course</p>
              <p className="text-text-secondary text-sm leading-relaxed">{course.whyChosen}</p>
            </div>

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
              The power of the I&E Certificate isn't in any single course. It's in how they connect.
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
