import * as React from "react";
import { Location } from "@/types";
import { builders } from "@/data/builders";
import { BuilderCard } from "@/components/builder/BuilderCard";

interface LocationBuildersProps {
  location: Location;
}

export function LocationBuilders({ location }: LocationBuildersProps) {
  const activeBuilders = builders.filter((b) => location.builders.includes(b.slug));

  if (activeBuilders.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-foreground">Top Builders in {location.name}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeBuilders.map((builder) => (
            <BuilderCard key={builder.id} builder={builder} />
          ))}
        </div>
      </div>
    </section>
  );
}
