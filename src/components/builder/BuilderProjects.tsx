import * as React from "react";
import { Builder } from "@/types";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { properties } from "@/data/properties";

interface BuilderProjectsProps {
  builder: Builder;
}

export function BuilderProjects({ builder }: BuilderProjectsProps) {
  // Find projects that belong to this builder
  const builderProjects = properties.filter(
    (prop) => builder.featuredProjects.includes(prop.id) || prop.builder === builder.name
  );

  if (builderProjects.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-foreground">Featured Projects by {builder.name}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builderProjects.map((project) => (
            <PropertyCard key={project.id} property={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
