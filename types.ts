
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  // New detailed fields
  challenge?: string;
  solution?: string;
  role?: string;
  techStack?: string[];
  features?: string[];
  impact?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  tags: string[];
  link?: string;
}
