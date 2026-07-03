import { properties } from "@/data/properties";
import { Property } from "@/types/property";

export interface PropertySearchParams {
  q?: string;
  location?: string;
  builder?: string;
  type?: string;
  budget?: string;
  config?: string;
  status?: string;
  possession?: string;
  sort?: string;
  page?: string;
}

export async function getFilteredProperties(searchParams: PropertySearchParams): Promise<{
  properties: Property[];
  totalPages: number;
  totalCount: number;
}> {
  // Simulate network delay to show skeletons
  await new Promise(resolve => setTimeout(resolve, 800));

  let filtered = [...properties];

  if (searchParams.q) {
    const q = searchParams.q.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.location.toLowerCase().includes(q) ||
      p.builder.toLowerCase().includes(q) ||
      p.sector.toLowerCase().includes(q)
    );
  }

  if (searchParams.location && searchParams.location !== 'all') {
    const loc = searchParams.location.replace(/-/g, ' ').toLowerCase();
    filtered = filtered.filter(p => p.location.toLowerCase().includes(loc) || p.sector.toLowerCase().includes(loc));
  }

  if (searchParams.builder && searchParams.builder !== 'all') {
    const builder = searchParams.builder.replace(/-/g, ' ').toLowerCase();
    filtered = filtered.filter(p => p.builder.toLowerCase().includes(builder));
  }

  if (searchParams.type && searchParams.type !== 'all') {
    const t = searchParams.type.replace(/-/g, ' ').toLowerCase();
    filtered = filtered.filter(p => p.type && p.type.toLowerCase().includes(t));
  }
  
  if (searchParams.config && searchParams.config !== 'all') {
    const config = searchParams.config.toLowerCase();
    filtered = filtered.filter(p => p.configuration.toLowerCase().includes(config));
  }
  
  if (searchParams.status && searchParams.status !== 'all') {
    const status = searchParams.status.replace(/-/g, ' ').toLowerCase();
    filtered = filtered.filter(p => p.status.toLowerCase().includes(status));
  }
  
  if (searchParams.possession && searchParams.possession !== 'all') {
    const possession = searchParams.possession.replace(/-/g, ' ').toLowerCase();
    filtered = filtered.filter(p => (p.possession && p.possession.toLowerCase().includes(possession)) || (p.possessionDate && p.possessionDate.toLowerCase().includes(possession)));
  }

  if (searchParams.budget && searchParams.budget !== 'all') {
    const b = searchParams.budget;
    filtered = filtered.filter(p => {
      const price = p.numericPrice || 0;
      if (b === "under-3") return price < 30000000;
      if (b === "3-5") return price >= 30000000 && price < 50000000;
      if (b === "5-10") return price >= 50000000 && price <= 100000000;
      if (b === "above-10") return price > 100000000;
      return true;
    });
  }

  if (searchParams.sort) {
    filtered.sort((a, b) => {
      const priceA = a.numericPrice || 0;
      const priceB = b.numericPrice || 0;
      
      switch (searchParams.sort) {
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        case "newest":
          // Mock sorting by ID since we don't have created_at
          return b.id.localeCompare(a.id);
        case "possession":
          const dateA = a.possessionDate || "";
          const dateB = b.possessionDate || "";
          return dateA.localeCompare(dateB);
        case "recommended":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  } else {
    // Default to recommended
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  const ITEMS_PER_PAGE = 6;
  const page = parseInt(searchParams.page || "1");
  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  const paginatedResults = filtered.slice(startIndex, endIndex);

  return {
    properties: paginatedResults,
    totalPages,
    totalCount
  };
}
