import * as React from "react";
import { Location } from "@/types";

interface LocationOverviewProps {
  location: Location;
}

export function LocationOverview({ location }: LocationOverviewProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">About {location.name}</h2>
          <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed">
            <p>{location.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
