import { ReactNode } from "react";

export type PropertyStatus = "Ready to Move" | "Under Construction" | "New Launch";

export interface Property {
  id: string;
  slug: string;
  title: string;
  builder: string;
  location: string;
  sector: string;
  price: string; // e.g., "₹ 3.5 Cr Onwards"
  configuration: string; // e.g., "3, 4 & 5 BHK Apartments"
  area: string; // e.g., "2500 - 4500 Sq.Ft."
  status: PropertyStatus;
  reraNumber?: string;
  possession?: string; // e.g., "Dec 2026"
  amenities: { name: string; iconKey: string }[] | string[];
  thumbnail: string;
  builderLogo?: string;
  featured: boolean;
  
  // Phase 7 Extended Fields (Mock data for Property Details)
  highlights?: string[];
  configurationsList?: { type: string; area: string; price: string; status: string }[];
  amenityGroups?: { category: string; items: { name: string; iconKey: string }[] }[];
  floorPlans?: { id: string; name: string; area: string; image: string }[];
  locationAdvantages?: { category: string; items: { name: string; distance: string; iconKey: string }[] }[];
  developerProfile?: { name: string; logo: string; experience: string; delivered: string; description: string };
  faqs?: { question: string; answer: string }[];
  
  // Legacy fields for [slug]/page.tsx and PropertiesClient.tsx
  description?: string;
  images?: string[];
  type?: string;
  numericPrice?: number;
  possessionDate?: string;
  advantages?: string[];
}
