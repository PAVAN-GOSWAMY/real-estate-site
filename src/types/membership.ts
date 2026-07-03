export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface MembershipBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MembershipFAQ {
  question: string;
  answer: string;
}

export interface SuccessStory {
  id: string;
  clientName: string;
  clientType: "First-time Buyer" | "Investor" | "NRI Client";
  story: string;
  image: string;
}
