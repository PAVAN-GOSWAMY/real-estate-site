export * from './builder';
export * from './location';
export * from './blog';
export * from './contact';
export * from './membership';

export interface Property {
  id: string;
  title: string;
  slug: string;
  location: string;
  builder: string;
  price: string;
  numericPrice: number;
  configuration: string;
  area: string;
  possessionDate: string;
  amenities: string[];
  images: string[];
  featured: boolean;
  type: string; // e.g., 'Apartment', 'Villa'
  status: string; // e.g., 'Ready to Move', 'Under Construction'
  description: string;
  advantages: string[];
}
