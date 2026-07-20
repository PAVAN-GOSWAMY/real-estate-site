import { Service, CareerBenefit, CareerFAQ, SuccessStory, Job, WhyJoinReason } from "@/types/career";

export const premiumServices: Service[] = [
  {
    id: "advisory",
    title: "Property Investment Advisory",
    description: "Data-driven recommendations to maximize your real estate ROI in Noida.",
    icon: "TrendingUp"
  },
  {
    id: "loan",
    title: "Home Loan Assistance",
    description: "End-to-end support for fast-tracked loan approvals with top banks.",
    icon: "Landmark"
  },
  {
    id: "legal",
    title: "Legal Documentation Support",
    description: "Complete legal scrutiny and documentation for a hassle-free transaction.",
    icon: "FileText"
  },
  {
    id: "site-visit",
    title: "Site Visit Planning",
    description: "Curated and guided property tours with pick-up and drop facilities.",
    icon: "Map"
  },
  {
    id: "verification",
    title: "Property Verification",
    description: "Thorough RERA and background checks for primary and secondary properties.",
    icon: "ShieldCheck"
  },
  {
    id: "nri",
    title: "NRI Investment Services",
    description: "Specialized remote consulting and management for non-resident Indians.",
    icon: "Globe"
  },
  {
    id: "resale",
    title: "Resale & Rental Assistance",
    description: "Maximize your yields with our comprehensive leasing and resale services.",
    icon: "Key"
  },
  {
    id: "interior",
    title: "Interior Design Consultation",
    description: "Transform your new property with our expert interior design partners.",
    icon: "PaintRoller"
  }
];

export const careerBenefits: CareerBenefit[] = [
  {
    id: "work-environment",
    title: "Professional Work Environment",
    description: "Experience a dynamic and fast-paced workplace alongside Noida's leading real estate professionals.",
    icon: "Building"
  },
  {
    id: "growth",
    title: "Career Growth",
    description: "Accelerate your career with structured learning, mentorship, and clear progression opportunities.",
    icon: "TrendingUp"
  },
  {
    id: "leadership",
    title: "Ethical Leadership",
    description: "Work with experienced industry leaders who value transparency, integrity, and professionalism.",
    icon: "ShieldCheck"
  },
  {
    id: "portfolio",
    title: "Premium Client Portfolio",
    description: "Engage with high-net-worth individuals, reputed developers, and landmark projects across Noida.",
    icon: "Briefcase"
  }
];

export const whyJoinReasons: WhyJoinReason[] = [
  {
    id: "growth",
    title: "Professional Growth",
    description: "Work on premium residential and commercial projects across Noida and Greater Noida.",
    icon: "TrendingUp"
  },
  {
    id: "mentorship",
    title: "Learning & Mentorship",
    description: "Receive continuous training, guidance, and mentorship from experienced industry professionals.",
    icon: "GraduationCap"
  },
  {
    id: "rewards",
    title: "Performance Rewards",
    description: "Competitive salary, incentives, recognition, and career advancement opportunities.",
    icon: "Award"
  },
  {
    id: "culture",
    title: "Collaborative Culture",
    description: "Work in a supportive, transparent, and growth-oriented environment.",
    icon: "Users"
  }
];

export const jobOpenings: Job[] = [
  {
    id: "job-1",
    position: "Pre Sales / Tele Sales Executive",
    openings: 25,
    location: "Sector 68, Noida",
    experience: "3+ Years in Real Estate",
    requirements: "N/A"
  },
  {
    id: "job-2",
    position: "ASM / SM",
    openings: 10,
    location: "Greater Noida (CHI-V, Alpha-II)",
    experience: "1–3 Years",
    requirements: "Good Communication, Hindi & English, Own Vehicle"
  },
  {
    id: "job-3",
    position: "Senior Sales Manager",
    openings: 5,
    location: "Greater Noida (CHI Phi, Alpha-II)",
    experience: "3–5 Years",
    requirements: "Fluent Hindi & English, Presentable, Own Vehicle"
  },
  {
    id: "job-4",
    position: "AGM / GM",
    openings: 5,
    location: "Greater Noida, Noida Extension",
    experience: "5+ Years",
    requirements: "Real Estate Experience"
  },
  {
    id: "job-5",
    position: "AVP / VP",
    openings: 5,
    location: "Greater Noida",
    experience: "10+ Years",
    requirements: "Leadership Experience"
  }
];

export const careerFaq: CareerFAQ[] = [
  {
    question: "Is career mandatory to buy a property?",
    answer: "No, career is completely optional. You can still explore properties and submit standard enquiries without a career. Our paid plans are designed for clients seeking dedicated advisory and priority services."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. You can upgrade from Essential to Professional or Elite at any time. Our team will adjust your services accordingly."
  },
  {
    question: "How do consultations work?",
    answer: "Consultations can be conducted virtually via Zoom/Google Meet or in person at our Noida headquarters, based on your convenience and career tier."
  },
  {
    question: "Are site visits included in all plans?",
    answer: "Yes, site visits are available to all users. However, Professional and Elite members receive priority scheduling and dedicated pickup/drop services."
  },
  {
    question: "Is loan assistance available for NRI clients?",
    answer: "Yes, our dedicated NRI Investment Services team provides end-to-end loan assistance specifically tailored to the documentation and compliance needs of non-resident Indians."
  }
];

export const successStories: SuccessStory[] = [
  {
    id: "story-1",
    clientName: "Rahul & Sneha Sharma",
    clientType: "First-time Buyer",
    story: "Square AR Spaces made our first home buying experience seamless. Their Essential plan provided us with verified project recommendations in Sector 150 that perfectly matched our budget.",
    image: "/images/properties/tropical-isle.jpg"
  },
  {
    id: "story-2",
    clientName: "Vikram Malhotra",
    clientType: "Investor",
    story: "The Professional career is a game-changer. My dedicated advisor helped me secure a pre-launch commercial unit on the Yamuna Expressway with excellent ROI potential.",
    image: "/images/properties/cullinan.jpg"
  },
  {
    id: "story-3",
    clientName: "Dr. Ananya Desai",
    clientType: "NRI Client",
    story: "Being based in Dubai, I needed someone I could trust. The Elite concierge service handled everything from legal verification to registration without me having to travel frequently.",
    image: "/images/properties/pious-hideaways.jpg"
  }
];
