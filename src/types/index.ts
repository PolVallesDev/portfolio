export interface Skill {
  title: string;
  category: string;
  description: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  stackBadge: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
  webUrl?: string;
  imageUrl?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
  degree: string;
  status: string;
}
