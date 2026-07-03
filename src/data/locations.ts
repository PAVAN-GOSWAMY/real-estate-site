import { Location } from "@/types";

export const locations: Location[] = [
  {
    id: "loc-001",
    slug: "sector-150",
    name: "Sector 150",
    city: "Noida",
    microMarket: "Noida Expressway",
    description: "Noida's greenest sector featuring ultra-luxury sports cities, low-density developments, and unparalleled connectivity to upcoming international airports.",
    heroImage: "/images/properties/pious-hideaways.jpg", // Using placeholder image
    gallery: [],
    overview: "Sector 150 is the crown jewel of Noida's real estate market. Master-planned as a sports city, it boasts 80% green cover, a 9-hole golf course, and international standard sports facilities. Its strategic location at the confluence of the Yamuna Expressway and Noida-Greater Noida Expressway makes it highly accessible.",
    statistics: {
      projectsAvailable: 15,
      averagePrice: "₹ 11,500 / sq.ft.",
      upcomingDevelopments: 4,
      builderCount: 8
    },
    connectivity: [
      { name: "Noida-Greater Noida Expressway", type: "Expressway", distance: "0 Mins" },
      { name: "Yamuna Expressway", type: "Expressway", distance: "5 Mins" },
      { name: "Sector 148 Metro Station", type: "Metro", distance: "5 Mins" },
      { name: "Jewar International Airport", type: "Airport", distance: "40 Mins" }
    ],
    nearbyEssentials: [
      { name: "Amity University", type: "University", distance: "15 Mins" },
      { name: "Jaypee Hospital", type: "Hospital", distance: "10 Mins" },
      { name: "DLF Mall of India", type: "Mall", distance: "25 Mins" }
    ],
    investmentHighlights: [
      "Low Density Sector (80% Green Cover)",
      "Proximity to upcoming Jewar Airport",
      "World-class Sports Infrastructure",
      "High appreciation potential due to premium builder focus"
    ],
    marketInsights: {
      averagePropertyPrice: "₹ 11,500 / sq.ft.",
      priceAppreciation: "18% YoY",
      popularConfigurations: ["3 BHK", "4 BHK"],
      demandTrend: "High",
      futureGrowthPotential: "Excellent due to upcoming aviation hub connectivity."
    },
    featuredProjects: ["prop-003", "prop-007"], // ATS Pious Hideaways, Eldeco
    builders: ["ats-group", "eldeco", "godrej-properties", "tata-housing"],
    faq: [
      { question: "Why is Sector 150 famous?", answer: "It is planned as a sports city with 80% greenery and low-density luxury housing." },
      { question: "Is Sector 150 good for investment?", answer: "Yes, its proximity to expressways and the upcoming airport makes it a high ROI destination." }
    ],
    seo: {
      title: "Projects in Sector 150 Noida - Luxury Apartments",
      description: "Explore premium residential projects in Sector 150 Noida. Get price, floor plans, and amenities for top properties in Noida's greenest sector."
    }
  },
  {
    id: "loc-002",
    slug: "yamuna-expressway",
    name: "Yamuna Expressway",
    city: "Greater Noida",
    microMarket: "Yamuna Expressway",
    description: "The fastest-growing real estate corridor anchored by the upcoming Jewar International Airport and Film City.",
    heroImage: "/images/properties/cullinan.jpg",
    gallery: [],
    overview: "Yamuna Expressway is transforming into a global investment hub. With massive infrastructural pushes like the Noida International Airport (Jewar), Film City, and industrial corridors, it offers immense capital appreciation potential.",
    statistics: {
      projectsAvailable: 25,
      averagePrice: "₹ 7,500 / sq.ft.",
      upcomingDevelopments: 12,
      builderCount: 15
    },
    connectivity: [
      { name: "Jewar International Airport", type: "Airport", distance: "15 Mins" },
      { name: "Eastern Peripheral Expressway", type: "Expressway", distance: "10 Mins" }
    ],
    nearbyEssentials: [
      { name: "Gautam Buddha University", type: "University", distance: "10 Mins" },
      { name: "Kailash Hospital", type: "Hospital", distance: "20 Mins" }
    ],
    investmentHighlights: [
      "Next to Noida International Airport",
      "Proposed Film City",
      "Massive industrial and commercial growth"
    ],
    marketInsights: {
      averagePropertyPrice: "₹ 7,500 / sq.ft.",
      priceAppreciation: "25% YoY",
      popularConfigurations: ["Villas", "Plots", "2 BHK", "3 BHK"],
      demandTrend: "Rising",
      futureGrowthPotential: "Exceptional due to multi-billion dollar mega projects."
    },
    featuredProjects: ["prop-004", "prop-008"], // ACE Terra, Gaur Yamuna City
    builders: ["ace-group", "gaursons", "ats-group"],
    faq: [
      { question: "Is Yamuna Expressway a good investment?", answer: "It is currently the hottest investment corridor in North India due to the Jewar Airport." }
    ],
    seo: {
      title: "Property on Yamuna Expressway - Plots & Flats",
      description: "Invest in Yamuna Expressway properties. Discover flats, villas, and plots near Jewar Airport."
    }
  },
  {
    id: "loc-003",
    slug: "greater-noida-west",
    name: "Greater Noida West",
    city: "Greater Noida",
    microMarket: "Noida Extension",
    description: "The most popular residential hub offering affordable luxury, excellent infrastructure, and upcoming metro connectivity.",
    heroImage: "/images/properties/tropical-isle.jpg",
    gallery: [],
    overview: "Greater Noida West (formerly Noida Extension) is the bustling residential core of the region. Known for well-planned wide roads, affordable luxury homes, and a vibrant community, it is the top choice for end-users and investors alike.",
    statistics: {
      projectsAvailable: 50,
      averagePrice: "₹ 6,800 / sq.ft.",
      upcomingDevelopments: 10,
      builderCount: 20
    },
    connectivity: [
      { name: "Upcoming Metro Station", type: "Metro", distance: "5 Mins" },
      { name: "NH-24", type: "Expressway", distance: "15 Mins" },
      { name: "Central Noida (Sector 78/79)", type: "Business District", distance: "10 Mins" }
    ],
    nearbyEssentials: [
      { name: "Yatharth Hospital", type: "Hospital", distance: "5 Mins" },
      { name: "Gaur City Mall", type: "Mall", distance: "5 Mins" }
    ],
    investmentHighlights: [
      "High rental demand from IT professionals",
      "Upcoming Aqua Line Metro extension",
      "Well-established social infrastructure"
    ],
    marketInsights: {
      averagePropertyPrice: "₹ 6,800 / sq.ft.",
      priceAppreciation: "15% YoY",
      popularConfigurations: ["2 BHK", "3 BHK"],
      demandTrend: "Steady",
      futureGrowthPotential: "Strong, driven by metro completion and commercial hub development."
    },
    featuredProjects: ["prop-005"], // CRC Maesta
    builders: ["crc-group", "gaursons", "mahagun", "ace-group"],
    faq: [
      { question: "Is Metro coming to Greater Noida West?", answer: "Yes, the Aqua Line extension is approved and will serve Greater Noida West." }
    ],
    seo: {
      title: "Properties in Greater Noida West (Noida Extension)",
      description: "Find the best residential projects in Greater Noida West. Compare prices, floor plans, and amenities."
    }
  }
];
