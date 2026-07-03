// Legacy data to support older components (TopLocations, About Page, Old Property Pages) until they are refactored.
export const locations = [
  {
    name: "Sector 150",
    slug: "sector-150",
    image: "/images/properties/pious-hideaways.jpg",
    propertyCount: 24,
  },
  {
    name: "Yamuna Expressway",
    slug: "yamuna-expressway",
    image: "/images/properties/cullinan.jpg",
    propertyCount: 15,
  },
  {
    name: "Greater Noida West",
    slug: "greater-noida-west",
    image: "/images/properties/tropical-isle.jpg",
    propertyCount: 45,
  },
  {
    name: "Sector 94",
    slug: "sector-94",
    image: "/images/properties/cullinan.jpg",
    propertyCount: 32,
  },
];

export const developers = [
  { name: "M3M India" },
  { name: "Godrej Properties" },
  { name: "ATS Group" },
  { name: "ACE Group" },
  { name: "Mahagun" },
];

export const legacyProperties = [
  {
    slug: "ats-pious-hideaways",
    title: "ATS Pious Hideaways",
    description: "A luxury apartment offering a serene sanctuary amidst lush greens.",
    status: "Under Construction",
    type: "Apartment",
    location: "Sector 150",
    price: "₹ 1.8 Cr",
    images: ["/images/properties/pious-hideaways.jpg"],
    configuration: "3 BHK",
    area: "1675 sq.ft.",
    builder: "ATS Group",
    possessionDate: "Dec 2026",
    amenities: ["Swimming Pool", "Clubhouse", "Sports Facilities"],
    advantages: ["Near Noida-Greater Noida Expressway", "Upcoming Jewar Airport (40 mins)"],
    thumbnail: "/images/properties/pious-hideaways.jpg",
  }
];
