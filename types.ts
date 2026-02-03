export interface Link {
  label: string;
  url: string;
  type?: 'pdf' | 'code' | 'website' | 'video';
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  description?: string;
  links: Link[];
  tags?: string[];
  thumbnail?: string; // Optional thumbnail
}

export interface NewsItem {
  date: string;
  content: string;
}

export interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'scholar' | 'email';
  url: string;
  username?: string;
}

export interface ResearchInterest {
  topic: string;
  icon?: string;
}

export interface Profile {
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  email: string;
  location: string;
  avatarUrl: string;
}