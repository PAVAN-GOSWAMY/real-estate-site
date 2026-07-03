import * as React from "react";
import { Location } from "@/types";
import { GraduationCap, Stethoscope, ShoppingBag, Landmark, Film, MapPin } from "lucide-react";

interface LocationEssentialsProps {
  location: Location;
}

export function LocationEssentials({ location }: LocationEssentialsProps) {
  if (!location.nearbyEssentials || location.nearbyEssentials.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case "School":
      case "University": return <GraduationCap className="w-5 h-5 text-primary" />;
      case "Hospital": return <Stethoscope className="w-5 h-5 text-primary" />;
      case "Mall": return <ShoppingBag className="w-5 h-5 text-primary" />;
      case "IT Park": return <Landmark className="w-5 h-5 text-primary" />;
      case "Entertainment": return <Film className="w-5 h-5 text-primary" />;
      default: return <MapPin className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Nearby Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {location.nearbyEssentials.map((item, index) => (
            <div key={index} className="bg-surface p-6 rounded-2xl border border-border/50 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                {getIcon(item.type)}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm line-clamp-1">{item.name}</h4>
                <p className="text-xs font-semibold text-muted-foreground mt-1">{item.type} • {item.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
