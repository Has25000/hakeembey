import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Lightbulb, AlertCircle, BookOpen, FileText, ChevronDown, ChevronUp, Clock } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  hours: string;
  type: '150hr' | '300hr';
  description: {
    nature: string;
    responsibilities: string[];
    whyChosen: string;
  };
  reflection: {
    innovativeIdeas: string;
    failureStory: string;
    keyLearnings: string[];
  };
  workProduct: {
    description: string;
    placeholder: boolean;
  };
}

const experiences: Experience[] = [
  {
    id: 'resonate',
    title: 'Co-Founder & Full-Stack Developer',
    organization: 'Resonate',
    period: 'June 2024 - November 2024',
    hours: '150+',
    type: '150hr',
    description: {
      nature: 'Early-stage startup development in the consumer social/music technology space. I served as a technical co-founder responsible for building core platform features and driving user acquisition.',
      responsibilities: [
        'Collaborated in developing a cross-platform mobile app using React Native, TypeScript, PocketBase, and Go',
        'Created 6 new features and fixed 3 bugs across the front-end and back-end in three weeks',
        'Launched a beta version and led user acquisition efforts, acquiring 80 users within 2 weeks',
        'Gathered and implemented continuous user feedback to enable rapid iteration and feature enhancements',
      ],
      whyChosen: 'I chose this experience because I wanted to understand what it truly takes to build a product from zero to one. I had technical skills but lacked experience in the messy reality of startup execution, including dealing with ambiguity, shipping fast, and learning from real users. Resonate gave me the opportunity to wear multiple hats and experience the full lifecycle of early-stage venture building.',
    },
    reflection: {
      innovativeIdeas: 'One of the key innovations I contributed was designing a hybrid navigation system that could handle both content discovery and social features without overwhelming users. I also proposed implementing a feedback loop mechanism that would surface user behavior data to inform our feature prioritization. This data-driven approach to product development became central to how we made decisions, moving us from building what we thought users wanted to building what they actually needed.',
      failureStory: 'Our biggest failure came when we launched a feature we were confident users would love: a complex social feed with multiple content types. We spent two weeks building it, but when we released it, engagement was minimal. Users found it confusing and overwhelming. I learned that my assumption about what users wanted was wrong because I hadn\'t validated it first. This taught me the critical importance of customer discovery and MVP testing before committing engineering resources. After this failure, we implemented a rule: no feature ships without at least 5 user interviews validating the problem. This failure fundamentally changed how I approach product development.',
      keyLearnings: [
        'Speed of iteration matters more than perfection in early-stage ventures. Ship fast, learn fast.',
        'User feedback is the most valuable data source; create systematic ways to collect and act on it',
        'Technical skills are necessary but not sufficient. Understanding users and markets is equally important.',
        'Co-founder dynamics and clear communication are critical; misalignment kills startups faster than competition',
      ],
    },
    workProduct: {
      description: 'Work product demonstrating the Resonate platform, user growth metrics, and technical architecture.',
      placeholder: true,
    },
  },
  {
    id: 'rice-research',
    title: 'Undergraduate Research Intern',
    organization: 'Rice University - Hilton Lab',
    period: 'May 2023 - July 2024',
    hours: '300+',
    type: '300hr',
    description: {
      nature: 'Computational biology research at the intersection of genomics and gene regulation. I worked in the Hilton Lab focusing on understanding transcriptional memory and CRISPR applications.',
      responsibilities: [
        'Analyzed promoter sequences of 1400 stimulated genes using Python and the UCSC Human Genome Browser REST API',
        'Identified key patterns related to transcriptional memory and developed two figures for an upcoming research paper',
        'Authored well-documented, reusable analysis code that is still used by the lab today for gene analysis',
        'Engineered a negative control for CRISPR screening, enabling research on IDO1 gene\'s effects on immune response',
        'Presented findings at a research symposium, communicating complex technical work to diverse audiences',
      ],
      whyChosen: 'I pursued this experience because I wanted to understand how innovation happens in academic research settings and how fundamental science translates to real-world applications. The Hilton Lab\'s work on CRISPR and gene regulation sits at the frontier of biotechnology, an area I believe will transform healthcare. I wanted to experience the scientific process firsthand and understand the challenges of moving from discovery to application.',
    },
    reflection: {
      innovativeIdeas: 'I developed a novel approach to analyzing promoter sequences by combining REST API data retrieval with custom Python analysis pipelines. Rather than manually querying the UCSC Genome Browser, I built automated scripts that could process thousands of genes efficiently. I also proposed a new visualization method for representing transcriptional memory patterns that made complex data more accessible to non-computational biologists. This approach of making computational tools accessible to bench scientists became a theme in my work, bridging the gap between technical capability and practical usability.',
      failureStory: 'Early in my research, I spent three weeks building an analysis pipeline that I thought would reveal important patterns in the data. When I finally ran it on the full dataset, the results were meaningless. I had made an error in how I was normalizing the data that invalidated all my conclusions. I had to throw away weeks of work and start over. This failure taught me the importance of validating assumptions early and often, testing with small datasets before scaling up, and having others review your methodology. In research, as in startups, failing fast is better than failing slow. After this experience, I adopted a practice of peer code review and checkpoint validation that prevented similar mistakes.',
      keyLearnings: [
        'Research requires patience and rigor. Shortcuts lead to unreliable results that waste more time in the long run.',
        'Documentation and reproducibility are not optional; code that only you can run is not useful to the scientific community',
        'The gap between academic research and real-world application is significant; translating discoveries requires entrepreneurial thinking',
        'Communicating complex technical work to non-experts is a skill that requires practice and is essential for impact',
        'CRISPR and gene editing technologies have enormous potential but require careful consideration of ethical implications',
      ],
    },
    workProduct: {
      description: 'Research deliverables including analysis code, data visualizations, and presentation materials from the Hilton Lab.',
      placeholder: true,
    },
  },
];

export function IEExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedSections, setExpandedSections] = useState<Record<string, Record<string, boolean>>>({});

  const toggleSection = (expId: string, section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [expId]: {
        ...prev[expId],
        [section]: !prev[expId]?.[section],
      },
    }));
  };

  const isExpanded = (expId: string, section: string) => {
    return expandedSections[expId]?.[section] ?? true; // Default expanded
  };

  return (
    <section id="experiences" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">I&E Experiences</h2>
        <p className="section-subtitle mb-12">
          Hands-on experiences that shaped my entrepreneurial journey.
        </p>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="border border-border rounded-xl overflow-hidden bg-surface/50"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-accent/10 to-violet/10 border-b border-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      exp.type === '150hr'
                        ? 'bg-accent/20 text-accent'
                        : 'bg-violet/20 text-violet'
                    }`}>
                      {exp.hours} Hours
                    </span>
                    <span className="text-xs text-text-muted">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">{exp.organization}</h3>
                  <p className="text-text-secondary">{exp.title}</p>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <Clock size={16} />
                  <span className="text-sm">{exp.type === '150hr' ? '150hr Experience' : '300hr Experience'}</span>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection(exp.id, 'description')}
                className="w-full p-4 flex items-center justify-between hover:bg-surface-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-accent" />
                  <span className="font-semibold text-text-primary">Description</span>
                </div>
                {isExpanded(exp.id, 'description') ? (
                  <ChevronUp size={20} className="text-text-muted" />
                ) : (
                  <ChevronDown size={20} className="text-text-muted" />
                )}
              </button>
              {isExpanded(exp.id, 'description') && (
                <div className="px-6 pb-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-2">
                      Nature of Experience
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{exp.description.nature}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-2">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.description.responsibilities.map((resp, i) => (
                        <li key={i} className="text-text-secondary flex gap-2">
                          <span className="text-accent mt-1 shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-2">
                      Why I Chose This Experience
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{exp.description.whyChosen}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Reflection Section */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection(exp.id, 'reflection')}
                className="w-full p-4 flex items-center justify-between hover:bg-surface-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Lightbulb size={20} className="text-violet" />
                  <span className="font-semibold text-text-primary">Reflection</span>
                </div>
                {isExpanded(exp.id, 'reflection') ? (
                  <ChevronUp size={20} className="text-text-muted" />
                ) : (
                  <ChevronDown size={20} className="text-text-muted" />
                )}
              </button>
              {isExpanded(exp.id, 'reflection') && (
                <div className="px-6 pb-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-2">
                      Innovative Ideas Generated
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{exp.reflection.innovativeIdeas}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                    <h4 className="text-sm font-medium text-amber-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                      <AlertCircle size={16} />
                      Failure & Learning
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{exp.reflection.failureStory}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-2">
                      Key Learnings
                    </h4>
                    <ul className="space-y-2">
                      {exp.reflection.keyLearnings.map((learning, i) => (
                        <li key={i} className="text-text-secondary flex gap-2">
                          <span className="text-accent mt-1 shrink-0">•</span>
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Work Product Section */}
            <div>
              <button
                onClick={() => toggleSection(exp.id, 'workProduct')}
                className="w-full p-4 flex items-center justify-between hover:bg-surface-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-accent" />
                  <span className="font-semibold text-text-primary">Work Product</span>
                </div>
                {isExpanded(exp.id, 'workProduct') ? (
                  <ChevronUp size={20} className="text-text-muted" />
                ) : (
                  <ChevronDown size={20} className="text-text-muted" />
                )}
              </button>
              {isExpanded(exp.id, 'workProduct') && (
                <div className="px-6 pb-6">
                  {exp.workProduct.placeholder ? (
                    <div className="p-6 rounded-lg border-2 border-dashed border-border bg-surface/50 text-center">
                      <BookOpen size={32} className="mx-auto text-text-muted mb-3" />
                      <p className="text-text-secondary mb-2">{exp.workProduct.description}</p>
                      <p className="text-text-muted text-sm">
                        Work product will be added here (slides, graphics, code samples, or other deliverables)
                      </p>
                    </div>
                  ) : (
                    <p className="text-text-secondary">{exp.workProduct.description}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
