import { Builder } from "@/types";

export const builders: Builder[] = [
  {
    id: "bld-001",
    slug: "m3m-india",
    name: "M3M India",
    logo: "/images/properties/cullinan.jpg", // Using placeholder image for now
    description: "M3M India is synonymous with luxury and innovation in Indian real estate, creating iconic developments with world-class architecture. Known for delivering premium commercial and residential spaces, the brand focuses on uncompromising quality and timely delivery.",
    tagline: "Magnificence in the Trinity of Men, Materials, and Money",
    establishedYear: 2010,
    headquarters: "Gurugram, Haryana",
    citiesServed: 3,
    projectsCompleted: 40,
    projectsOngoing: 20,
    happyFamilies: "25,000+",
    awards: [
      { id: "a1", name: "Best Luxury Project", year: "2023", organization: "Realty Plus" },
      { id: "a2", name: "Developer of the Year", year: "2022", organization: "ET Real Estate" }
    ],
    certifications: ["ISO 9001:2015", "IGBC Gold"],
    featuredProjects: ["prop-001"], // M3M The Cullinan
    gallery: [
      "/images/properties/cullinan.jpg",
      "/images/properties/gallery_exterior.png"
    ],
    faq: [
      { question: "What is M3M's core focus?", answer: "M3M focuses on ultra-luxury residential and premium commercial developments." },
      { question: "Are M3M projects RERA registered?", answer: "Yes, all ongoing M3M projects are fully RERA compliant." }
    ],
    seo: {
      title: "M3M India - Ultra Luxury Projects in Noida & Gurugram",
      description: "Explore world-class residential and commercial projects by M3M India."
    }
  },
  {
    id: "bld-002",
    slug: "godrej-properties",
    name: "Godrej Properties",
    logo: "/images/properties/tropical-isle.jpg", // Using placeholder
    description: "Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry. Each development combines a 125-year legacy of excellence and trust with a commitment to cutting-edge design and technology.",
    tagline: "Building on Trust",
    establishedYear: 1990,
    headquarters: "Mumbai, Maharashtra",
    citiesServed: 12,
    projectsCompleted: 80,
    projectsOngoing: 45,
    happyFamilies: "40,000+",
    awards: [
      { id: "a1", name: "Real Estate Company of the Year", year: "2022", organization: "Construction Week" },
      { id: "a2", name: "Green Builder of the Year", year: "2021", organization: "IGBC" }
    ],
    certifications: ["ISO 14001", "IGBC Platinum"],
    featuredProjects: ["prop-002"], // Godrej Tropical Isle
    gallery: [
      "/images/properties/tropical-isle.jpg"
    ],
    faq: [
      { question: "Why choose Godrej Properties?", answer: "We offer unmatched trust, superior build quality, and a focus on sustainable, green living." },
      { question: "Does Godrej have projects in Noida?", answer: "Yes, Godrej has multiple luxury projects across prime sectors in Noida." }
    ],
    seo: {
      title: "Godrej Properties - Luxury Real Estate Developer",
      description: "Discover premium residential projects by Godrej Properties across India."
    }
  },
  {
    id: "bld-003",
    slug: "ats-group",
    name: "ATS Group",
    logo: "/images/properties/pious-hideaways.jpg", // Using placeholder
    description: "ATS Group has become a trusted name in NCR real estate, renowned for its commitment to lush green environments, low-density developments, and unparalleled quality. Their projects are synonymous with spacious layouts and exceptional lifestyle amenities.",
    tagline: "The Better Way Home",
    establishedYear: 1998,
    headquarters: "Noida, Uttar Pradesh",
    citiesServed: 4,
    projectsCompleted: 20,
    projectsOngoing: 15,
    happyFamilies: "35,000+",
    awards: [
      { id: "a1", name: "Most Trusted Real Estate Brand", year: "2023", organization: "Times Business Awards" }
    ],
    certifications: ["ISO 9001:2015"],
    featuredProjects: ["prop-003"], // ATS Pious Hideaways
    gallery: [
      "/images/properties/pious-hideaways.jpg",
      "/images/properties/gallery_pool.png"
    ],
    faq: [
      { question: "What makes ATS different?", answer: "ATS is known for low-density projects with abundant greenery and world-class sports amenities." },
      { question: "Are ATS projects ready to move?", answer: "We have both ready-to-move and under-construction properties available." }
    ],
    seo: {
      title: "ATS Group - Premium Housing in Noida & Greater Noida",
      description: "Find your dream home with ATS Group, offering premium lifestyle amenities and green spaces."
    }
  },
  {
    id: "bld-004",
    slug: "ace-group",
    name: "ACE Group",
    logo: "/images/properties/pious-hideaways.jpg",
    description: "ACE Group has rapidly emerged as one of the most prominent real estate developers in the NCR, specifically Noida and Greater Noida. They focus on providing modern, luxurious, and highly functional residential and commercial spaces.",
    tagline: "Fulfilling Dreams, Building Trust",
    establishedYear: 2010,
    headquarters: "Noida, Uttar Pradesh",
    citiesServed: 2,
    projectsCompleted: 15,
    projectsOngoing: 8,
    happyFamilies: "15,000+",
    awards: [
      { id: "a1", name: "Best Commercial Project", year: "2021", organization: "CNBC Awaaz" }
    ],
    certifications: ["ISO 9001"],
    featuredProjects: ["prop-004"],
    gallery: ["/images/properties/pious-hideaways.jpg"],
    faq: [
      { question: "Where are ACE projects primarily located?", answer: "Our major projects are located across Noida, Greater Noida, and Yamuna Expressway." }
    ],
    seo: {
      title: "ACE Group - Real Estate Developers Noida",
      description: "Explore residential and commercial properties by ACE Group."
    }
  },
  {
    id: "bld-005",
    slug: "crc-group",
    name: "CRC Group",
    logo: "/images/properties/tropical-isle.jpg",
    description: "CRC Group is a leading real estate brand driven by the core values of customer centricity, reliability, and commitment. They focus on delivering projects that offer a perfect blend of luxury, comfort, and advanced technology.",
    tagline: "Committed to Excellence",
    establishedYear: 2006,
    headquarters: "Noida, Uttar Pradesh",
    citiesServed: 3,
    projectsCompleted: 5,
    projectsOngoing: 4,
    happyFamilies: "5,000+",
    awards: [],
    certifications: ["ISO 9001:2008"],
    featuredProjects: ["prop-005"],
    gallery: ["/images/properties/tropical-isle.jpg"],
    faq: [
      { question: "Does CRC Group build commercial spaces?", answer: "Yes, CRC Group develops both premium residential and modern commercial spaces." }
    ],
    seo: {
      title: "CRC Group - Real Estate",
      description: "CRC Group focuses on excellence and luxury in Noida and Greater Noida."
    }
  },
  {
    id: "bld-006",
    slug: "mahagun",
    name: "Mahagun",
    logo: "/images/properties/cullinan.jpg",
    description: "Mahagun is a prestigious real estate developer known for its iconic architectural designs and ultra-luxury residential projects in the National Capital Region.",
    tagline: "A Name that Performs",
    establishedYear: 1995,
    headquarters: "Noida, Uttar Pradesh",
    citiesServed: 3,
    projectsCompleted: 35,
    projectsOngoing: 10,
    happyFamilies: "20,000+",
    awards: [],
    certifications: ["ISO 14001"],
    featuredProjects: ["prop-006"],
    gallery: ["/images/properties/cullinan.jpg"],
    faq: [],
    seo: {
      title: "Mahagun - Ultra Luxury Homes",
      description: "Discover the best in class luxury residential spaces by Mahagun."
    }
  },
  {
    id: "bld-007",
    slug: "eldeco",
    name: "Eldeco",
    logo: "/images/properties/pious-hideaways.jpg",
    description: "The Eldeco Group has been at the forefront of real estate development in North India since 1985. It has delivered projects encompassing high-rise condominiums, industrial estates, and integrated townships.",
    tagline: "Building Lifestyles Since 1985",
    establishedYear: 1985,
    headquarters: "New Delhi, Delhi",
    citiesServed: 15,
    projectsCompleted: 175,
    projectsOngoing: 30,
    happyFamilies: "30,000+",
    awards: [],
    certifications: ["ISO 9001"],
    featuredProjects: ["prop-007"],
    gallery: ["/images/properties/pious-hideaways.jpg"],
    faq: [],
    seo: {
      title: "Eldeco Group - Real Estate North India",
      description: "Eldeco brings you a wide range of residential properties with world-class amenities."
    }
  },
  {
    id: "bld-008",
    slug: "gaursons",
    name: "Gaursons",
    logo: "/images/properties/cullinan.jpg",
    description: "Gaursons has delivered numerous residential and commercial projects across the NCR. Founded on the twin values of quality and timely delivery, Gaursons has established itself as a stalwart in the real estate sector.",
    tagline: "Ur Own World",
    establishedYear: 1995,
    headquarters: "Ghaziabad, Uttar Pradesh",
    citiesServed: 5,
    projectsCompleted: 50,
    projectsOngoing: 15,
    happyFamilies: "100,000+",
    awards: [],
    certifications: ["ISO 9001"],
    featuredProjects: ["prop-008"],
    gallery: ["/images/properties/cullinan.jpg"],
    faq: [],
    seo: {
      title: "Gaursons - Residential & Commercial Projects",
      description: "Experience premium housing and vibrant commercial spaces with Gaursons."
    }
  }
];
