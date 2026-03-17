import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, RefreshCw, Compass } from 'lucide-react';

const reflections = [
  {
    icon: Sparkles,
    title: 'Biggest Takeaways from the Capstone',
    subtitle: 'Building Trybl as my capstone venture',
    content: [
      'The Capstone was the most formative experience of my time at Duke because it forced me to operate as a real founder, not a student playing one. Building Trybl taught me what execution at speed actually looks like: growing to 174 users, making the hard call to tear down the entire tech stack, pivoting the product, and rebuilding with a smaller but more engaged base of 44 active users.',
      'Managing a team of 10+ people taught me that leadership isn\'t about having all the answers — it\'s about creating clarity when there is none and keeping people aligned through uncertainty. I learned how to run sprints, resolve conflicts, delegate effectively, and hold people accountable while still building trust.',
      'Beyond operations, I developed real skills in growth strategy, investing and fundraising conversations, and relationship building with institutional stakeholders. Our upcoming summer meeting with Duke Housing & Residence Life to explore integrating Trybl into the housing experience is a direct result of the relationships and credibility we built through the Capstone process.',
      'The biggest lesson: pivoting is not failure. It\'s proof that you\'re listening to your users and have the courage to act on what you learn, even when it means starting over.',
    ],
  },
  {
    icon: RefreshCw,
    title: 'How My Understanding of Self and I&E Evolved',
    subtitle: 'From building products to building with people',
    content: [
      'When I started the I&E Certificate, I thought entrepreneurship was fundamentally about building great products. If the technology was good enough, users would come. The certificate — and especially the experience of building Trybl — completely changed that understanding.',
      'Entrepreneurship is about people, persistence, and adapting. When we rebuilt Trybl\'s tech stack from scratch, it wasn\'t because the old code was bad. It was because we had learned enough about our users to realize the product needed to serve them differently. That decision came from customer discovery frameworks I learned in I&E 352, design thinking from BME Design, and the scaling mindset I picked up in Silicon Valley.',
      'My understanding of myself evolved too. I learned that I thrive in ambiguity, that I\'m energized by building teams, and that my strongest skill isn\'t writing code — it\'s connecting technical capability with human need. I used to define myself as an engineer who does entrepreneurship. Now I see myself as a builder who uses engineering as one of many tools to create impact.',
      'The I&E Certificate taught me that the best founders aren\'t the ones who never fail. They\'re the ones who learn from failure faster than anyone else. That\'s the mindset I carry forward.',
    ],
  },
  {
    icon: Compass,
    title: 'How the Program Impacted My Duke Experience and Beyond',
    subtitle: 'Frameworks that shaped my ventures and my future',
    content: [
      'The I&E program fundamentally shaped my Duke experience by giving me frameworks that turned classroom knowledge into real-world action. Without I&E 352\'s customer discovery methods, I would have built Trybl based on assumptions instead of user needs. Without Duke in Silicon Valley, I wouldn\'t have understood how top companies think about product-market fit, culture, and team building. Without BME Design, I wouldn\'t have the human-centered design instincts that guide every product decision I make.',
      'These weren\'t abstract lessons. They directly informed how I built Trybl, how I managed my team, how I made the decision to pivot, and how I\'m now approaching institutional partnerships with Duke HRL. The I&E Certificate gave me a language and a toolkit for the messy, non-linear process of building something from nothing.',
      'Looking beyond Duke, I plan to take Trybl full-time after graduation with runway through August. The skills I developed through this program — execution at speed, growth strategy, team management, fundraising, and relationship building — are exactly what I\'ll need to scale Trybl into a sustainable company. Whether Trybl becomes a massive success or teaches me the lessons I need for my next venture, the I&E Certificate ensured I\'ll approach it with the right mindset, frameworks, and resilience.',
      'The I&E program didn\'t just add a certificate to my transcript. It changed how I think about problems, people, and purpose. That\'s the kind of impact that lasts well beyond graduation.',
    ],
  },
];

export function FinalReflection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="final-reflection" className="section-container bg-surface/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Final Reflection</h2>
        <p className="section-subtitle mb-12">
          Looking back on the I&E Capstone and the journey that brought me here.
        </p>
      </motion.div>

      <div className="space-y-8">
        {reflections.map((reflection, index) => (
          <motion.div
            key={reflection.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="card"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg shrink-0 ${
                index === 0 ? 'bg-accent/10 text-accent' :
                index === 1 ? 'bg-violet/10 text-violet' :
                'bg-accent/10 text-accent'
              }`}>
                <reflection.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  {reflection.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">{reflection.subtitle}</p>
                <div className="space-y-4">
                  {reflection.content.map((paragraph, i) => (
                    <p key={i} className="text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 p-6 rounded-xl border border-accent/30 bg-gradient-to-r from-accent/5 to-violet/5 text-center"
      >
        <p className="text-text-secondary leading-relaxed">
          The I&E Certificate didn't just teach me how to build ventures — it taught me how to
          <span className="text-accent font-medium"> think like a builder</span>. That's the skill
          I'll carry with me long after Duke.
        </p>
      </motion.div>
    </section>
  );
}
