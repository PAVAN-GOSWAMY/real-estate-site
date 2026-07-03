export interface LocationEssential {
  name: string;
  distance: string;
  type: "School" | "Hospital" | "Mall" | "IT Park" | "University" | "Entertainment" | "Other";
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  city: string;
  microMarket: string;
  description: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  statistics: {
    projectsAvailable: number;
    averagePrice: string;
    upcomingDevelopments: number;
    builderCount: number;
  };
  connectivity: {
    name: string;
    type: "Metro" | "Expressway" | "Airport" | "Business District";
    distance: string;
  }[];
  nearbyEssentials: LocationEssential[];
  investmentHighlights: string[];
  marketInsights: {
    averagePropertyPrice: string;
    priceAppreciation: string; // e.g., "12% YoY"
    popularConfigurations: string[];
    demandTrend: "High" | "Steady" | "Rising";
    futureGrowthPotential: string;
  };
  featuredProjects: string[]; // Slugs or IDs of properties
  builders: string[]; // Slugs or names of builders
  faq: LocationFAQ[];
  seo: {
    title: string;
    description: string;
  };
}
