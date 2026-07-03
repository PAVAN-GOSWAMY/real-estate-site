import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { locations } from "@/data/locations";

interface PropertyBreadcrumbProps {
  location: string;
  sector: string;
  title: string;
}

export function PropertyBreadcrumb({ location, sector, title }: PropertyBreadcrumbProps) {
  const match = locations.find(
    (l) => l.name.toLowerCase() === sector.toLowerCase() || l.name.toLowerCase() === location.toLowerCase()
  );

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
      <Link href="/" className="hover:text-primary transition-colors flex items-center">
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4 shrink-0" />
      <Link href="/properties" className="hover:text-primary transition-colors">
        Properties
      </Link>
      <ChevronRight className="h-4 w-4 shrink-0" />
      {match ? (
        <Link href={`/locations/${match.slug}`} className="hover:text-primary transition-colors">
          {match.name}
        </Link>
      ) : (
        <Link href={`/properties?location=${location.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary transition-colors">
          {location}
        </Link>
      )}
      <ChevronRight className="h-4 w-4 shrink-0" />
      <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
        {title}
      </span>
    </nav>
  );
}
