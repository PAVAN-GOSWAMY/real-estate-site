export interface BuilderAward {
  id: string;
  name: string;
  year: string;
  organization: string;
}

export interface BuilderFAQ {
  question: string;
  answer: string;
}

export interface Builder {
  id: string;
  slug: string;
  name: string;
  logo: string;
  description: string;
  tagline: string;
  establishedYear: string | number;
  headquarters: string;
  citiesServed: number;
  projectsCompleted: number;
  projectsOngoing: number;
  happyFamilies: number | string;
  awards: BuilderAward[];
  certifications: string[];
  featuredProjects: string[]; // Project IDs
  gallery: string[];
  faq: BuilderFAQ[];
  seo?: {
    title: string;
    description: string;
  };
}
