export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    id: 'equal-iq',
    company: 'Equal IQ',
    role: 'AI/ML Engineering Contractor',
    location: 'Remote',
    period: 'Oct 2025 - Present',
    highlight: 'a16z-backed',
    description: [
      'Created a document preprocessing pipeline to improve downstream AI understanding, combining parsing, normalization, and tool/model-based extraction for structured representations',
      'Generated a hypergraph from SRL outputs and transformed it into an event graph using heuristic methods and BERT-family models (incl. LegalBERT)',
      'Trained GNNs to produce embeddings for a Pinecone-backed RAG system to improve grounding and reduce failure modes',
      'Scoped the engagement independently by defining tasks, negotiating the role, and executing end-to-end with little oversight',
    ],
    tags: ['RAG', 'GNN', 'LegalBERT', 'Pinecone', 'Document AI'],
  },
  {
    id: 'tanium',
    company: 'Tanium',
    role: 'Software Engineering Intern',
    location: 'Durham, NC',
    period: 'June 2025 - Aug 2025',
    description: [
      'Implemented a notification workflow in a Temporal-based service, configuring provider logic and workflow steps to support customizable in-app notification delivery',
      'Built gRPC service methods to communicate with a Postgres-backed internal API, improving integration between backend services and platform tooling',
      'Contributed to a React/TypeScript frontend by cleaning up legacy code, fixing UI bugs, and shipping minor improvements',
      'Collaborated across backend and frontend teams in an agile environment with internal tooling used by thousands of enterprise customers',
    ],
    tags: ['Temporal', 'gRPC', 'React', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'trybl',
    company: 'Trybl',
    role: 'Founder & Full-Stack Engineer',
    location: 'Durham, NC',
    period: 'May 2025 - Present',
    description: [
      'Designed, built, and shipped a full-stack mobile app for student resources, events, social feeds, and collaboration using React Native (Expo), TypeScript, Go, and PocketBase',
      'Implementing a tool-calling chatbot backed by a vector database and RAG pipeline to retrieve personalized context and execute actions via backend APIs',
      'Engineered a scalable data model with 15+ collections and built a navigation system with custom filtering, memoized components, and virtualized lists',
      'Leading product, engineering, and operations end-to-end; managing a 10+ person team and grew the app to 186 users',
    ],
    tags: ['React Native', 'TypeScript', 'Go', 'PocketBase', 'RAG'],
  },
  {
    id: 'rice',
    company: 'Rice University (Hilton Lab)',
    role: 'Undergraduate Researcher',
    location: 'Houston, TX',
    period: 'May 2023 - July 2024',
    description: [
      'Analyzed promoter sequences of 1400 stimulated genes using Python and the UCSC Human Genome Browser REST API',
      'Developed figures for an upcoming research paper and authored reusable analysis code still used today',
      'Engineered a negative control for CRISPR screening, enabling research on IDO1 gene\'s effects on immune response',
    ],
    tags: ['Python', 'Genomics', 'CRISPR', 'REST APIs'],
  },
  {
    id: 'curious-cardinals',
    company: 'Curious Cardinals',
    role: 'Mentor',
    location: 'Durham, NC',
    period: 'March 2024 - Present',
    description: [
      'Mentored 7 students across math, reading, and computer science by designing lesson plans and hands-on build sessions',
      'Led project-based learning in Python, web development (React), and mobile apps (React Native + Google Maps API)',
      'Guided students in developing AI models achieving 95-99% accuracy in medical imaging and stock prediction',
    ],
    tags: ['Teaching', 'Python', 'React', 'Machine Learning'],
  },
];
