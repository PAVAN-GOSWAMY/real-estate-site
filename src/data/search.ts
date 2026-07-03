import {
  LocationOption,
  PropertyTypeOption,
  BudgetOption,
  ConfigurationOption,
} from "@/types/search";

export const locations: LocationOption[] = [
  { value: "sector-150", label: "Sector 150" },
  { value: "sector-137", label: "Sector 137" },
  { value: "sector-128", label: "Sector 128" },
  { value: "sector-93", label: "Sector 93" },
  { value: "sector-62", label: "Sector 62" },
  { value: "greater-noida-west", label: "Greater Noida West" },
  { value: "noida-extension", label: "Noida Extension" },
  { value: "pari-chowk", label: "Pari Chowk" },
  { value: "techzone-iv", label: "Techzone IV" },
  { value: "yamuna-expressway", label: "Yamuna Expressway" },
];

export const propertyTypes: PropertyTypeOption[] = [
  { value: "apartment", label: "Apartment" },
  { value: "luxury-apartment", label: "Luxury Apartment" },
  { value: "villa", label: "Villa" },
  { value: "independent-floor", label: "Independent Floor" },
  { value: "plot", label: "Plot" },
  { value: "commercial-office", label: "Commercial Office" },
  { value: "retail-shop", label: "Retail Shop" },
  { value: "studio-apartment", label: "Studio Apartment" },
];

export const budgets: BudgetOption[] = [
  { value: "under-50l", label: "Under ₹50L" },
  { value: "50l-1cr", label: "₹50L – ₹1Cr" },
  { value: "1cr-2cr", label: "₹1Cr – ₹2Cr" },
  { value: "2cr-5cr", label: "₹2Cr – ₹5Cr" },
  { value: "above-5cr", label: "Above ₹5Cr" },
];

export const configurations: ConfigurationOption[] = [
  { value: "studio", label: "Studio" },
  { value: "1bhk", label: "1 BHK" },
  { value: "2bhk", label: "2 BHK" },
  { value: "3bhk", label: "3 BHK" },
  { value: "4bhk", label: "4 BHK" },
  { value: "5bhk-plus", label: "5 BHK+" },
];
