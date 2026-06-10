import { Profile, NewsItem, Publication, ResearchInterest, SocialLink } from './types';

export const PROFILE: Profile = {
  name: "Syed Mohamad Tawseeq",
  title: "Undergraduate",
  affiliation: "Indian Institute of Technology Kharagpur",
  email: "theguysta56@gmail.com",
  bio: `I recently graduated from the Indian Institute of Technology (IIT) Kharagpur with a Bachelor's degree in Chemical Engineering and a Micro-Specialization in Artificial Intelligence & Applications. Previously, I was a Research Intern at [Adobe MDSR Lab](https://adobe.mdsr.live/). Currently, at IIT Kharagpur, I work under the guidance of Prof. [Debaditya Roy](https://sites.google.com/view/debadityaroy/home?authuser=0) and Prof. [Somak Aditya](https://adityasomak.github.io/).

My primary interests lie in LLM Reasoning and Multimodal Learning. I also explore topics such as automated scientific discovery and neurosymbolic AI. These experiences have made me more curious about how models can integrate logic with statistical learning to achieve verifiable intelligence. As a dedicated student passionate about artificial intelligence, I am eager to embark on a research career focused on advancing reasoning and explainability in AI systems and ensuring their responsible development.`,
  avatarUrl: "be_iid_a.jpg", // Placeholder
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'email', url: 'mailto:theguysta56@gmail.com' },
  { platform: 'scholar', url: 'https://scholar.google.com/citations?user=CijNWhoAAAAJ&hl=en', username: 'Google Scholar' },
  { platform: 'github', url: 'https://github.com/tawseeq1', username: 'tawseeq1' },
  { platform: 'twitter', url: 'https://twitter.com/smta56', username: '@smta56' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/tawseeq/' },
];

export const INTERESTS: ResearchInterest[] = [
  { topic: "AI for Scientific Discovery" },
  { topic: "Reasoning in Large Language Models" },
  { topic: "Neuro-Symbolic AI" },
  { topic: "Multimodal Learning" },
  { topic: "Geometric Representation Learning" }
];

export const NEWS: NewsItem[] = [
  { date: "June 2026", content: "[Do VLMs Reason Like Engineers? A Benchmark and a Stage-wise Evaluation](https://arxiv.org/abs/2606.10833) is available on arXiv."},
  { date: "May 2026", content: "Graduated from IIT Kharagpur" },
  { date: "Feb 2026", content: "[ExperiGen](https://arxiv.org/abs/2602.07983) is available on arXiv." },
  { date: "May 2025", content: "Started my research internship at Adobe MDSR Lab." },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p2",
    title: "Do VLMs Reason Like Engineers? A Benchmark and a Stage-wise Evaluation",
    authors: ["Syed Wasiq*", "Syed Mohamad Tawseeq*", "Yashwant Pravinrao Bangde", "Debaditya Roy"],
    venue: "Under Review",
    year: 2026,
    description: "We introduce EngVQA, a benchmark of 696 engineering problems across five subjects, along with an 8-stage process-based evaluation framework that assesses intermediate reasoning steps rather than only final answers.",
    tags: ["Visual Question Answering", "Multimodal Benchmarks", "Engineering Reasoning", "Stage-wise Evaluation", "LLM-as-a-Judge"],
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2606.10833", type: "pdf" },
      { label: "Code", url: "", type: "code" },
      { label: "Project Page", url: "", type: "website" },
    ]
  },
  {
    id: "p1",
    title: "Accelerating Social Science Research via Agentic Hypothesization and Experimentation",
    authors: ["JS Gupta*", "Harini SI*", "SK Singh*", "SM Tawseeq*", "YK Singla", "D Doermann", "RR Shah", "B Krishnamurthy"],
    venue: "Under Review",
    year: 2026,
    description: "A framework for end-to-end hypothesis discovery that uses a generator–experimenter loop inspired by Bayesian optimization to propose and validate hypotheses, significantly outperforming prior methods.",
    tags: ["Hypothesis Discovery", "Social Science"],
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2602.07983", type: "pdf" },
      { label: "Code", url: "#", type: "code" },
      { label: "Project Page", url: "https://behavior-in-the-wild.github.io/experigen.html", type: "website" },
    ]
  }
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