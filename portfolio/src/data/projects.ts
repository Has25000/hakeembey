export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'software' | 'ai-ml' | 'biomedical' | 'research';
  featured?: boolean;
  metrics?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  // Featured Projects
  {
    id: 'trybl',
    title: 'Trybl',
    description: 'Full-stack mobile app for student resources, events, social feeds, and peer collaboration',
    longDescription: 'Designed, built, and shipped a full-stack mobile platform supporting academic resources, student events, social feeds, and peer collaboration. Built with React Native (Expo), TypeScript, Go, and PocketBase. Engineered a scalable data model with 15+ interrelated collections and implemented real-time messaging.',
    tags: ['React Native', 'TypeScript', 'Go', 'PocketBase', 'RAG'],
    category: 'software',
    featured: true,
    metrics: '186+ users',
  },
  {
    id: 'equal-iq',
    title: 'Document Intelligence Pipeline',
    description: 'RAG system with GNNs and LegalBERT for document understanding at Equal IQ (a16z-backed)',
    longDescription: 'Created a document preprocessing pipeline combining parsing, normalization, and model-based extraction. Generated hypergraphs from SRL outputs, transformed into event graphs using BERT-family models including LegalBERT. Trained GNNs to produce embeddings for a Pinecone-backed RAG system.',
    tags: ['RAG', 'GNN', 'LegalBERT', 'Pinecone', 'NLP'],
    category: 'ai-ml',
    featured: true,
    metrics: 'a16z-backed startup',
  },
  {
    id: 'pacemaker',
    title: 'Single-Chamber Pacemaker',
    description: 'Fully functional pacemaker with real-time ECG signal acquisition and QRS complex detection',
    longDescription: 'Engineered a fully functional single-chamber pacemaker capable of real-time ECG signal acquisition, QRS complex detection, and electrical stimulation based on lower rate interval thresholds. Built analog signal conditioning circuitry with >1000x gain, microcontroller software for beat detection, and MOSFET-based stimulation circuits.',
    tags: ['Arduino', 'Signal Processing', 'Analog Circuits', 'Embedded'],
    category: 'biomedical',
    featured: true,
    metrics: 'Tested 55-230 bpm',
  },
  {
    id: 'simclr',
    title: 'Self-Supervised Learning Research',
    description: 'SimCLR, RotNet, and hybrid SSL models achieving >85% accuracy on CIFAR-10',
    longDescription: 'Designed and implemented three self-supervised learning models on CIFAR-10: SimCLR (contrastive learning), RotNet (rotation prediction), and a novel hybrid architecture. Demonstrated superior performance to supervised baselines in low-label settings (1%, 10%, 50% labels).',
    tags: ['PyTorch', 'SimCLR', 'ResNet', 'Self-Supervised Learning'],
    category: 'ai-ml',
    featured: true,
    metrics: '>85% accuracy',
  },

  // Software Engineering
  {
    id: 'resonate',
    title: 'Resonate',
    description: 'Cross-platform mobile app for music collaboration with 80 beta users',
    tags: ['React Native', 'TypeScript', 'PocketBase', 'Go'],
    category: 'software',
    metrics: '80 beta users',
  },
  {
    id: 'jpmorgan',
    title: 'Code for Good - Opportunity International',
    description: 'React website with AI lesson planner using OpenAI API, built in 24 hours at JPMorgan hackathon',
    tags: ['React', 'OpenAI API', 'Hackathon'],
    category: 'software',
    metrics: '24-hour build',
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    description: 'Social fitness app with real-time chat, following, and task management using Swift and Firebase',
    tags: ['Swift', 'SwiftUI', 'Firebase'],
    category: 'software',
  },

  // AI/ML
  {
    id: 'cnn-cifar',
    title: 'CNN Training & Optimization',
    description: 'Trained ResNet-20 on CIFAR-10 achieving >90% accuracy with batch norm and data augmentation',
    tags: ['PyTorch', 'ResNet', 'CNN', 'CIFAR-10'],
    category: 'ai-ml',
    metrics: '>90% accuracy',
  },
  {
    id: 'rnn-llm',
    title: 'RNN & LLM Development',
    description: 'LSTM for sentiment analysis and fine-tuned GPT-2 with LoRA on WikiText',
    tags: ['LSTM', 'GPT-2', 'LoRA', 'Hugging Face'],
    category: 'ai-ml',
  },
  {
    id: 'adversarial',
    title: 'Adversarial Attacks & Defenses',
    description: 'Implemented FGSM, PGD attacks and adversarial training defenses on FashionMNIST',
    tags: ['Adversarial ML', 'PyTorch', 'FGSM', 'PGD'],
    category: 'ai-ml',
  },
  {
    id: 'pruning',
    title: 'Model Pruning & Quantization',
    description: 'Achieved 80% sparsity on ResNet-20 while preserving accuracy via iterative pruning',
    tags: ['Model Compression', 'Quantization', 'PyTorch'],
    category: 'ai-ml',
    metrics: '80% sparsity',
  },
  {
    id: 'protein-gen',
    title: 'Protein Generation (TinyLlama)',
    description: 'Autoregressive protein sequence generation using adapted TinyLlama architecture',
    tags: ['TinyLlama', 'Protein Design', 'Transformers'],
    category: 'ai-ml',
  },
  {
    id: 'sagediff',
    title: 'SAGEdiff - Species-Aware Diffusion',
    description: 'Novel discrete denoising diffusion model for species-conditioned protein generation',
    tags: ['Diffusion Models', 'Protein Design', 'Transformers'],
    category: 'ai-ml',
  },

  // Biomedical
  {
    id: 'sleep-lab',
    title: 'Sleep Lab Monitoring System',
    description: 'Python pipeline for CPAP data analysis with breath detection and apnea counting',
    tags: ['Python', 'Signal Processing', 'REST APIs', 'MongoDB'],
    category: 'biomedical',
  },
  {
    id: 'idr-prediction',
    title: 'IDR Prediction Models',
    description: 'Transformer and BiLSTM models for intrinsically disordered region classification (AUROC 0.908)',
    tags: ['Transformers', 'BiLSTM', 'ProtBERT', 'ESM'],
    category: 'biomedical',
    metrics: '0.908 AUROC',
  },
  {
    id: 'signal-peptide',
    title: 'SigDetect & SpheraFit',
    description: 'Deep learning for signal peptide detection (97% accuracy) and protein asphericity prediction',
    tags: ['ESM-2', 'MLP', 'Protein Structure'],
    category: 'biomedical',
    metrics: '97% accuracy',
  },
  {
    id: 'bpa-model',
    title: 'Human BPA Accumulation Model',
    description: 'Differential equation model for BPA accumulation using quantitative toxicology',
    tags: ['Differential Equations', 'Toxicology', 'Modeling'],
    category: 'biomedical',
  },

  // Research
  {
    id: 'rice-genomics',
    title: 'Gene Promoter Analysis',
    description: 'Analyzed 1400 gene promoter sequences identifying patterns related to transcriptional memory',
    tags: ['Python', 'UCSC Genome Browser', 'Bioinformatics'],
    category: 'research',
    metrics: '1400 genes analyzed',
  },
  {
    id: 'crispr',
    title: 'CRISPR Screening Control',
    description: 'Engineered negative control for CRISPR-Cas9 knockout studying IDO1 immune response effects',
    tags: ['CRISPR', 'Gene Editing', 'Immunology'],
    category: 'research',
  },
];

export const categories = [
  { id: 'software', label: 'Software Engineering', color: 'bg-blue-500' },
  { id: 'ai-ml', label: 'AI / Machine Learning', color: 'bg-purple-500' },
  { id: 'biomedical', label: 'Biomedical Engineering', color: 'bg-green-500' },
  { id: 'research', label: 'Research', color: 'bg-amber-500' },
] as const;
