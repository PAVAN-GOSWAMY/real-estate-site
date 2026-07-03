import * as React from "react";
import { Location } from "@/types";
import { Map, Train, Plane, Briefcase } from "lucide-react";

interface LocationConnectivityProps {
  location: Location;
}

export function LocationConnectivity({ location }: LocationConnectivityProps) {
  if (!location.connectivity || location.connectivity.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case "Metro": return <Train className="w-5 h-5 text-primary" />;
      case "Expressway": return <Map className="w-5 h-5 text-primary" />;
      case "Airport": return <Plane className="w-5 h-5 text-primary" />;
      case "Business District": return <Briefcase className="w-5 h-5 text-primary" />;
      default: return <Map className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="py-12 bg-accent/5">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Connectivity & Transit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {location.connectivity.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                {getIcon(item.type)}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm line-clamp-2">{item.name}</h4>
                <p className="text-xs font-semibold text-muted-foreground mt-1 uppercase tracking-wider">{item.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
