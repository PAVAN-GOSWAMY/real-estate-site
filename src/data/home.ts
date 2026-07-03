export interface TrustMetric {
  id: string;
  value: string;
  label: string;
}

export const trustMetrics: TrustMetric[] = [
  { id: "tm-projects", value: "500+", label: "Verified Projects" },
  { id: "tm-developers", value: "50+", label: "Trusted Developers" },
  { id: "tm-clients", value: "2,000+", label: "Happy Clients" },
  { id: "tm-experience", value: "10+", label: "Years of Experience" },
];
