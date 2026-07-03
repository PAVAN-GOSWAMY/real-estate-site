import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "prop-001",
    slug: "m3m-the-cullinan",
    title: "M3M The Cullinan",
    builder: "M3M India",
    location: "Noida",
    sector: "Sector 94",
    price: "₹ 5.5 Cr Onwards",
    configuration: "3, 4 & 5 BHK Ultra Luxury Apartments",
    area: "3200 - 5800 Sq.Ft.",
    status: "Under Construction",
    reraNumber: "UPRERAPRJ442214",
    possession: "Dec 2027",
    amenities: [
      { name: "Infinity Pool", iconKey: "pool" },
      { name: "Clubhouse", iconKey: "clubhouse" },
      { name: "Gymnasium", iconKey: "gym" },
      { name: "Smart Home", iconKey: "smart" },
    ],
    thumbnail: "/images/properties/cullinan.jpg",
    featured: true,
    description: "Experience ultra-luxury living at M3M The Cullinan, featuring expansive residences with breathtaking views of the city skyline.",
    type: "Apartment",
    numericPrice: 55000000,
    possessionDate: "Dec 2027",
    advantages: ["Near Yamuna Expressway", "Premium connectivity"],
    // Extended fields
    images: [
      "/images/properties/cullinan.jpg",
      "/images/properties/gallery_living_room.png",
      "/images/properties/gallery_pool.png",
      "/images/properties/gallery_exterior.png",
    ],
    highlights: ["RERA Approved", "Mixed-Use Development", "Iconic Architecture", "Metro Connectivity", "Ultra Luxury Specifications", "5-Star Clubhouse"],
    configurationsList: [
      { type: "3 BHK + Maid", area: "3200 Sq.Ft.", price: "₹ 5.5 Cr", status: "Available" },
      { type: "4 BHK + Maid", area: "4200 Sq.Ft.", price: "₹ 7.2 Cr", status: "Fast Selling" },
      { type: "5 BHK Penthouse", area: "5800 Sq.Ft.", price: "₹ 11.5 Cr", status: "Sold Out" },
    ],
    amenityGroups: [
      {
        category: "Lifestyle",
        items: [
          { name: "Infinity Pool", iconKey: "pool" },
          { name: "Mini Theatre", iconKey: "theatre" },
          { name: "Fine Dining", iconKey: "dining" },
        ]
      },
      {
        category: "Sports & Fitness",
        items: [
          { name: "Gymnasium", iconKey: "gym" },
          { name: "Squash Court", iconKey: "sports" },
          { name: "Yoga Deck", iconKey: "yoga" },
        ]
      },
      {
        category: "Convenience",
        items: [
          { name: "Smart Home", iconKey: "smart" },
          { name: "Valet Parking", iconKey: "parking" },
          { name: "Concierge", iconKey: "concierge" },
        ]
      }
    ],
    floorPlans: [
      { id: "fp-1", name: "3 BHK + Maid", area: "3200 Sq.Ft.", image: "/images/properties/cullinan.jpg" }, // Using main image as placeholder
      { id: "fp-2", name: "4 BHK + Maid", area: "4200 Sq.Ft.", image: "/images/properties/cullinan.jpg" },
    ],
    locationAdvantages: [
      {
        category: "Connectivity",
        items: [
          { name: "Okhla Bird Sanctuary Metro", distance: "0 Mins", iconKey: "metro" },
          { name: "Noida-Greater Noida Expressway", distance: "2 Mins", iconKey: "road" },
        ]
      },
      {
        category: "Education & Healthcare",
        items: [
          { name: "Amity University", distance: "5 Mins", iconKey: "school" },
          { name: "Jaypee Hospital", distance: "15 Mins", iconKey: "hospital" },
        ]
      }
    ],
    developerProfile: {
      name: "M3M India",
      logo: "/images/properties/cullinan.jpg", // Using placeholder
      experience: "15+ Years",
      delivered: "40+ Projects",
      description: "M3M India is synonymous with luxury and innovation in Indian real estate, creating iconic developments with world-class architecture."
    },
    faqs: [
      { question: "Is M3M The Cullinan RERA approved?", answer: "Yes, it is fully RERA approved. Registration Number: UPRERAPRJ442214." },
      { question: "What is the expected possession date?", answer: "The project is scheduled for completion in December 2027." },
      { question: "Are there any commercial spaces within the project?", answer: "Yes, The Cullinan is a mixed-use development featuring a luxury retail avenue on the lower floors." },
    ]
  },
  {
    id: "prop-002",
    slug: "godrej-tropical-isle",
    title: "Godrej Tropical Isle",
    builder: "Godrej Properties",
    location: "Noida",
    sector: "Sector 146",
    price: "₹ 3.2 Cr Onwards",
    configuration: "3 & 4 BHK Luxury Residences",
    area: "2200 - 3400 Sq.Ft.",
    status: "New Launch",
    reraNumber: "UPRERAPRJ303390",
    possession: "Mar 2028",
    amenities: [
      { name: "Island Theme", iconKey: "theme" },
      { name: "Swimming Pool", iconKey: "pool" },
      { name: "Spa & Salon", iconKey: "spa" },
      { name: "Kids Play Area", iconKey: "kids" },
    ],
    thumbnail: "/images/properties/tropical-isle.jpg",
    featured: true,
    description: "Godrej Tropical Isle offers a serene island-themed lifestyle right in the heart of Noida with unparalleled luxury.",
    images: ["/images/properties/tropical-isle.jpg"],
    type: "Apartment",
    numericPrice: 32000000,
    possessionDate: "Mar 2028",
    advantages: ["Metro Connectivity", "Proximity to IT hubs"],
  },
  {
    id: "prop-003",
    slug: "ats-pious-hideaways",
    title: "ATS Pious Hideaways",
    builder: "ATS Group",
    location: "Greater Noida",
    sector: "Sector 150",
    price: "₹ 1.8 Cr Onwards",
    configuration: "3 BHK Premium Apartments",
    area: "1400 - 1800 Sq.Ft.",
    status: "Ready to Move",
    reraNumber: "UPRERAPRJ442430",
    possession: "Ready",
    amenities: [
      { name: "Sports Arena", iconKey: "sports" },
      { name: "Lush Greenery", iconKey: "park" },
      { name: "Gymnasium", iconKey: "gym" },
      { name: "Clubhouse", iconKey: "clubhouse" },
    ],
    thumbnail: "/images/properties/pious-hideaways.jpg",
    featured: true,
    description: "ATS Pious Hideaways offers a perfect blend of luxury and sports-centric lifestyle in Sector 150.",
    type: "Apartment",
    numericPrice: 18000000,
    possessionDate: "Ready",
    advantages: ["Low density sector", "World-class sports city"],
    images: [
      "/images/properties/pious-hideaways.jpg",
      "/images/properties/gallery_pool.png",
      "/images/properties/gallery_exterior.png",
    ],
    highlights: ["RERA Approved", "Ready to Move", "Low Density", "Sports City Location"],
    configurationsList: [
      { type: "3 BHK", area: "1400 Sq.Ft.", price: "₹ 1.8 Cr", status: "Available" },
      { type: "3 BHK + Study", area: "1675 Sq.Ft.", price: "₹ 2.2 Cr", status: "Few Left" },
    ],
    amenityGroups: [
      {
        category: "Sports",
        items: [
          { name: "Tennis Court", iconKey: "sports" },
          { name: "Swimming Pool", iconKey: "pool" },
        ]
      }
    ],
    locationAdvantages: [
      {
        category: "Connectivity",
        items: [
          { name: "Noida-Greater Noida Expressway", distance: "5 Mins", iconKey: "road" },
        ]
      }
    ],
    developerProfile: {
      name: "ATS Group",
      logo: "/images/properties/pious-hideaways.jpg", // Using placeholder
      experience: "25+ Years",
      delivered: "20+ Projects",
      description: "ATS is a trusted name in NCR real estate, known for its focus on greenery, quality construction, and timely delivery."
    },
  },
  {
    id: "prop-004",
    slug: "ace-terra",
    title: "ACE Terra",
    builder: "ACE Group",
    location: "Yamuna Expressway",
    sector: "Sector 22D",
    price: "₹ 2.1 Cr Onwards",
    configuration: "3 & 4 BHK Apartments",
    area: "1750 - 2400 Sq.Ft.",
    status: "New Launch",
    reraNumber: "UPRERAPRJXXXXXX",
    possession: "Dec 2028",
    amenities: [
      { name: "Forest Theme", iconKey: "theme" },
      { name: "Clubhouse", iconKey: "clubhouse" },
      { name: "Gymnasium", iconKey: "gym" }
    ],
    thumbnail: "/images/properties/pious-hideaways.jpg", // Using placeholder
    featured: false,
    description: "Experience living amidst nature with ACE Terra's unique forest-themed landscaping on the Yamuna Expressway.",
    images: ["/images/properties/pious-hideaways.jpg"],
    type: "Apartment",
    numericPrice: 21000000,
    possessionDate: "Dec 2028",
    advantages: ["Near Noida International Airport", "Film City vicinity"],
  },
  {
    id: "prop-005",
    slug: "crc-maesta",
    title: "CRC Maesta",
    builder: "CRC Group",
    location: "Greater Noida West",
    sector: "Sector 1",
    price: "₹ 1.5 Cr Onwards",
    configuration: "2 & 3 BHK Apartments",
    area: "1100 - 1500 Sq.Ft.",
    status: "Under Construction",
    reraNumber: "UPRERAPRJYYYYYY",
    possession: "Jun 2026",
    amenities: [
      { name: "Infinity Pool", iconKey: "pool" },
      { name: "Smart Home", iconKey: "smart" }
    ],
    thumbnail: "/images/properties/tropical-isle.jpg", // Using placeholder
    featured: false,
    description: "CRC Maesta brings unmatched luxury and smart living features to the heart of Greater Noida West.",
    images: ["/images/properties/tropical-isle.jpg"],
    type: "Apartment",
    numericPrice: 15000000,
    possessionDate: "Jun 2026",
    advantages: ["Upcoming Metro Station", "Excellent Connectivity"],
  },
  {
    id: "prop-006",
    slug: "mahagun-medalleo",
    title: "Mahagun Medalleo",
    builder: "Mahagun",
    location: "Noida",
    sector: "Sector 107",
    price: "₹ 3.8 Cr Onwards",
    configuration: "3, 4 & 5 BHK Luxury Apartments",
    area: "2500 - 4500 Sq.Ft.",
    status: "Under Construction",
    reraNumber: "UPRERAPRJZZZZZZ",
    possession: "Sep 2027",
    amenities: [
      { name: "Clubhouse", iconKey: "clubhouse" },
      { name: "Spa", iconKey: "spa" },
      { name: "Sports", iconKey: "sports" }
    ],
    thumbnail: "/images/properties/cullinan.jpg", // Using placeholder
    featured: false,
    description: "Mahagun Medalleo sets a new benchmark for ultra-luxury living in the highly sought-after Sector 107.",
    images: ["/images/properties/cullinan.jpg"],
    type: "Apartment",
    numericPrice: 38000000,
    possessionDate: "Sep 2027",
    advantages: ["Close to Noida Expressway", "Premium Neighborhood"],
  },
  {
    id: "prop-007",
    slug: "eldeco-live-by-the-greens",
    title: "Eldeco Live By The Greens",
    builder: "Eldeco",
    location: "Noida",
    sector: "Sector 150",
    price: "₹ 1.2 Cr Onwards",
    configuration: "2 & 3 BHK Apartments",
    area: "1150 - 1600 Sq.Ft.",
    status: "Ready to Move",
    reraNumber: "UPRERAPRJ111111",
    possession: "Ready",
    amenities: [
      { name: "Cricket Academy", iconKey: "sports" },
      { name: "Swimming Pool", iconKey: "pool" },
    ],
    thumbnail: "/images/properties/pious-hideaways.jpg", // Using placeholder
    featured: false,
    description: "Wake up to endless greens and world-class sporting amenities at Eldeco Live By The Greens.",
    images: ["/images/properties/pious-hideaways.jpg"],
    type: "Apartment",
    numericPrice: 12000000,
    possessionDate: "Ready",
    advantages: ["Golf Course Proximity", "Sports City"],
  },
  {
    id: "prop-008",
    slug: "gaur-yamuna-city",
    title: "Gaur Yamuna City",
    builder: "Gaursons",
    location: "Yamuna Expressway",
    sector: "Techzone IV",
    price: "₹ 2.8 Cr Onwards",
    configuration: "Villas & Plots",
    area: "2000 - 5000 Sq.Ft.",
    status: "Ready to Move",
    reraNumber: "UPRERAPRJ222222",
    possession: "Ready",
    amenities: [
      { name: "Lake", iconKey: "lake" },
      { name: "Clubhouse", iconKey: "clubhouse" },
    ],
    thumbnail: "/images/properties/cullinan.jpg", // Using placeholder
    featured: false,
    description: "An integrated township offering premium villas and plots alongside a stunning central lake.",
    images: ["/images/properties/cullinan.jpg"],
    type: "Villa",
    numericPrice: 28000000,
    possessionDate: "Ready",
    advantages: ["Integrated Township", "Yamuna Expressway Edge"],
  }
];
