import { MapPin, Building, Key } from "lucide-react";
import { Property } from "@/types/property";

interface PropertySummaryProps {
  property: Property;
}

export function PropertySummary({ property }: PropertySummaryProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            {property.status}
          </span>
          {property.reraNumber && (
            <span className="inline-flex items-center rounded-full bg-border/50 px-3 py-1 text-sm font-medium text-muted-foreground">
              RERA: {property.reraNumber}
            </span>
          )}
        </div>
        
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary tracking-tight mb-2">
          {property.title}
        </h1>
        
        <div className="flex items-center text-muted-foreground mt-2">
          <MapPin className="h-5 w-5 mr-2 shrink-0 text-accent" />
          <span className="text-lg">{property.sector}, {property.location}</span>
        </div>
      </div>

      <div className="prose prose-lg prose-p:text-muted-foreground max-w-none">
        <p>{property.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-border/50">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Developer</p>
          <p className="font-medium text-foreground">{property.builder}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Configurations</p>
          <p className="font-medium text-foreground">{property.configuration}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Project Area</p>
          <p className="font-medium text-foreground">{property.area}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Possession</p>
          <p className="font-medium text-foreground">{property.possession}</p>
        </div>
      </div>
    </div>
  );
}
