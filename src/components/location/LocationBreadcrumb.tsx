import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Location } from "@/types";

interface LocationBreadcrumbProps {
  location: Location;
}

export function LocationBreadcrumb({ location }: LocationBreadcrumbProps) {
  return (
    <nav className="bg-accent/5 py-4 border-b border-border/40">
      <div className="container px-4 md:px-6 mx-auto flex items-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
        <Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors font-medium">
          Locations
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
        <span className="text-foreground font-semibold truncate">
          {location.name}
        </span>
      </div>
    </nav>
  );
}
