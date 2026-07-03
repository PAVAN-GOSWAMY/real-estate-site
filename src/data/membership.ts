import { MembershipPlan, Service, MembershipBenefit, MembershipFAQ, SuccessStory } from "@/types/membership";

export const membershipPlans: MembershipPlan[] = [
  {
    id: "essential",
    name: "Essential",
    price: "Free",
    description: "Ideal for first-time buyers looking for reliable property recommendations.",
    features: [
      "Property recommendations",
      "Project alerts",
      "Basic consultation",
      "Email support"
    ],
    recommended: false
  },
  {
    id: "professional",
    name: "Professional",
    price: "₹9,999 / year",
    description: "Ideal for serious investors looking for end-to-end guidance.",
    features: [
      "Dedicated advisor",
      "Priority site visits",
      "Loan guidance",
      "Investment planning",
      "Legal assistance",
      "All Essential features"
    ],
    recommended: true
  },
  {
    id: "elite",
    name: "Elite",
    price: "Custom Pricing",
    description: "Premium concierge experience for HNIs and institutional investors.",
    features: [
      "Personal relationship manager",
      "Exclusive project launches",
      "Portfolio strategy",
      "Property acquisition support",
      "Premium documentation assistance",
      "Priority communication",
      "All Professional features"
    ],
    recommended: false
  }
];

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

export const membershipBenefits: MembershipBenefit[] = [
  {
    id: "priority",
    title: "Priority Access",
    description: "Get early access to exclusive pre-launch offers and premium inventory before it hits the open market.",
    icon: "Star"
  },
  {
    id: "advisor",
    title: "Dedicated Consultant",
    description: "Work with a single point of contact who understands your specific investment goals and preferences.",
    icon: "UserCheck"
  },
  {
    id: "verified",
    title: "Verified Projects",
    description: "We only recommend RERA-approved, legally vetted properties from reputed grade-A developers.",
    icon: "Shield"
  },
  {
    id: "insights",
    title: "Market Insights",
    description: "Receive proprietary reports on infrastructure developments and price trends in Noida and Greater Noida.",
    icon: "LineChart"
  }
];

export const membershipFaq: MembershipFAQ[] = [
  {
    question: "Is membership mandatory to buy a property?",
    answer: "No, membership is completely optional. You can still explore properties and submit standard enquiries without a membership. Our paid plans are designed for clients seeking dedicated advisory and priority services."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. You can upgrade from Essential to Professional or Elite at any time. Our team will adjust your services accordingly."
  },
  {
    question: "How do consultations work?",
    answer: "Consultations can be conducted virtually via Zoom/Google Meet or in person at our Noida headquarters, based on your convenience and membership tier."
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
    story: "Propteq made our first home buying experience seamless. Their Essential plan provided us with verified project recommendations in Sector 150 that perfectly matched our budget.",
    image: "/images/properties/tropical-isle.jpg"
  },
  {
    id: "story-2",
    clientName: "Vikram Malhotra",
    clientType: "Investor",
    story: "The Professional membership is a game-changer. My dedicated advisor helped me secure a pre-launch commercial unit on the Yamuna Expressway with excellent ROI potential.",
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
