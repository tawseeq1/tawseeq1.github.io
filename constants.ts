import { Profile, NewsItem, Publication, ResearchInterest, SocialLink } from './types';

export const PROFILE: Profile = {
  name: "Syed Mohamad Tawseeq",
  title: "Undergraduate Student",
  affiliation: "Indian Institute of Technology Kharagpur",
  location: "Srinagar, Jammu and Kashmir, India",
  email: "theguysta56@gmail.com",
  bio: "I am a 4th-year undergraduate student at the Indian Institute of Technology, Kharagpur, pursuing my bachelor's degree in Chemical Engineering with a minor in Mathematics & Computing, specializing in Artificial Intelligence & Applications. Previously, I was a Research Intern at Adobe MDSR Lab. My primary interests lie in LLM Reasoning and Multimodal Learning. I also explore topics such as automated scientific discovery and neurosymbolic AI. These experiences have made me more curious about how models can integrate logic with statistical learning to achieve verifiable intelligence. As a dedicated student passionate about artificial intelligence, I am eager to embark on a research career focused on advancing reasoning and explainability in AI systems and ensuring their responsible development.",
  avatarUrl: "be_tajpur.jpg", // Placeholder
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'email', url: 'mailto:theguysta56@gmail.com' },
  // { platform: 'scholar', url: 'https://scholar.google.com', username: '' },
  { platform: 'github', url: 'https://github.com/tawseeq1', username: 'tawseeq1' },
  { platform: 'twitter', url: 'https://twitter.com/smta56', username: '@smta56' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/tawseeq/' },
];

export const INTERESTS: ResearchInterest[] = [
  { topic: "Reasoning in Large Language Models" },
  { topic: "Multimodal Learning" },
  { topic: "Neuro-Symbolic AI" },
  { topic: "Open-Ended Scientific Discovery" },
];

export const NEWS: NewsItem[] = [
  // { date: "May 2024", content: "One paper accepted to **CVPR 2024**! See you in Seattle." },
  { date: "May 2025", content: "Started my research internship at Adobe MDSR Lab." },
  // { date: "Dec 2023", content: "Presented our work on NeRFs at **NeurIPS 2023**." },
  // { date: "Sep 2023", content: "Advanced to Ph.D. candidacy." },
];

export const PUBLICATIONS: Publication[] = [
  // {
  //   id: "p1",
  //   title: "Efficient 3D Scene Generation via Latent Diffusion Models",
  //   authors: ["Alex J. Researcher", "Jane Doe", "John Smith"],
  //   venue: "CVPR 2024 (Oral)",
  //   year: 2024,
  //   description: "We propose a novel method for generating high-fidelity 3D scenes using latent diffusion, achieving 10x faster inference speeds.",
  //   tags: ["Generative AI", "3D Vision"],
  //   links: [
  //     { label: "PDF", url: "#", type: "pdf" },
  //     { label: "Code", url: "#", type: "code" },
  //     { label: "Project Page", url: "#", type: "website" },
  //   ]
  // },
  // {
  //   id: "p2",
  //   title: "Understanding Robustness in Vision Transformers",
  //   authors: ["Bob Johnson", "Alex J. Researcher", "Alice Williams"],
  //   venue: "NeurIPS 2023",
  //   year: 2023,
  //   description: "An empirical study analyzing the adversarial robustness of ViTs compared to CNNs under various perturbation attacks.",
  //   tags: ["Robustness", "Vision Transformers"],
  //   links: [
  //     { label: "PDF", url: "#", type: "pdf" },
  //     { label: "Code", url: "#", type: "code" },
  //   ]
  // },
  // {
  //   id: "p3",
  //   title: "Self-Supervised Learning for Medical Imaging",
  //   authors: ["Alex J. Researcher", "Sarah Connor"],
  //   venue: "ICCV 2023 Workshops",
  //   year: 2023,
  //   description: "Leveraging unlabelled medical data to pre-train encoders for downstream classification tasks.",
  //   tags: ["Self-Supervised", "Medical AI"],
  //   links: [
  //     { label: "PDF", url: "#", type: "pdf" },
  //   ]
  // }
];