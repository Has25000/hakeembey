export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Java', 'C', 'Swift', 'HTML/CSS'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React', 'React Native', 'Expo', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Go', 'gRPC', 'REST APIs', 'Temporal', 'WebSockets'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'RAG', 'GNNs', 'Transformers', 'LoRA'],
  },
  {
    id: 'data',
    label: 'Data & Infrastructure',
    skills: ['PostgreSQL', 'MongoDB', 'PocketBase', 'Supabase', 'Pinecone', 'Firebase'],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Docker', 'Jira', 'Cursor', 'Claude Code'],
  },
];
