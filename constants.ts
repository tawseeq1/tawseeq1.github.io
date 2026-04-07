import { Profile, NewsItem, Publication, ResearchInterest, SocialLink } from './types';

export const PROFILE: Profile = {
  name: "Syed Mohamad Tawseeq",
  title: "Undergraduate",
  affiliation: "Indian Institute of Technology Kharagpur",
  email: "theguysta56@gmail.com",
  bio: `I am a 4th-year undergraduate student at the [Indian Institute of Technology, Kharagpur](https://www.iitkgp.ac.in/), pursuing my bachelor's degree in Chemical Engineering with a minor in Mathematics & Computing, specializing in Artificial Intelligence & Applications. Previously, I was a Research Intern at [Adobe MDSR Lab](https://adobe.mdsr.live/), where I worked with [Somesh](https://someshsingh22.github.io/), [Harini](https://harini-si.github.io/), and [Yaman](https://sites.google.com/view/yaman-kumar/). Currently, at IIT Kharagpur, I work under the guidance of Prof. [Somak Aditya](https://adityasomak.github.io/) and Prof. [Debaditya Roy](https://sites.google.com/view/debadityaroy/home?authuser=0).

My primary interests lie in LLM Reasoning and Multimodal Learning. I also explore topics such as automated scientific discovery and neurosymbolic AI. These experiences have made me more curious about how models can integrate logic with statistical learning to achieve verifiable intelligence. As a dedicated student passionate about artificial intelligence, I am eager to embark on a research career focused on advancing reasoning and explainability in AI systems and ensuring their responsible development.`,
  avatarUrl: "be_id_cropped.JPG", // Placeholder
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'email', url: 'mailto:theguysta56@gmail.com' },
  { platform: 'scholar', url: 'https://scholar.google.com/citations?user=CijNWhoAAAAJ&hl=en', username: 'Google Scholar' },
  { platform: 'github', url: 'https://github.com/tawseeq1', username: 'tawseeq1' },
  { platform: 'twitter', url: 'https://twitter.com/smta56', username: '@smta56' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/tawseeq/' },
];

export const INTERESTS: ResearchInterest[] = [
  { topic: "Reasoning in Large Language Models" },
  { topic: "Multimodal Learning" },
  { topic: "Neuro-Symbolic AI" },
  { topic: "Open-Ended Scientific Discovery" },
  { topic: "Geometric Representation Learning" }
];

export const NEWS: NewsItem[] = [
  { date: "Feb 2026", content: "[ExperiGen](https://arxiv.org/abs/2602.07983) is available on arXiv." },
  { date: "May 2025", content: "Started my research internship at Adobe MDSR Lab." },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Accelerating Social Science Research via Agentic Hypothesization and Experimentation",
    authors: ["Jishu Sen Gupta", "Harini SI", "Somesh Kumar Singh", "Syed Mohamad Tawseeq", "Yaman Kumar Singla", "David Doermann", "Rajiv Ratn Shah", "Balaji Krishnamurthy"],
    venue: "",
    year: 2026,
    description: "Data-driven social science research is inherently slow, relying on iterative cycles of observation, hypothesis generation, and experimental validation. While recent data-driven methods promise to accelerate parts of this process, they largely fail to support end-to-end scientific discovery. To address this gap, we introduce EXPERIGEN, an agentic framework that operationalizes end-to-end discovery through a Bayesian optimization inspired two-phase search, in which a Generator proposes candidate hypotheses and an Experimenter evaluates them empirically. Across multiple domains, EXPERIGEN consistently discovers 2-4x more statistically significant hypotheses that are 7-17 percent more predictive than prior approaches, and naturally extends to complex data regimes including multimodal and relational datasets. Beyond statistical performance, hypotheses must be novel, empirically grounded, and actionable to drive real scientific progress. To evaluate these qualities, we conduct an expert review of machine-generated hypotheses, collecting feedback from senior faculty. Among 25 reviewed hypotheses, 88 percent were rated moderately or strongly novel, 70 percent were deemed impactful and worth pursuing, and most demonstrated rigor comparable to senior graduate-level research. Finally, recognizing that ultimate validation requires real-world evidence, we conduct the first A/B test of LLM-generated hypotheses, observing statistically significant results with p less than 1e-6 and a large effect size of 344 percent.",
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