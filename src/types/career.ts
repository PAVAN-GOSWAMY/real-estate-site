export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Job {
  id: string;
  position: string;
  openings: number;
  location: string;
  experience: string;
  requirements: string;
}

export interface WhyJoinReason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CareerBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CareerFAQ {
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
