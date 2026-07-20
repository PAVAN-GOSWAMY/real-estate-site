import * as React from "react";
import { CareerServiceCard } from "./CareerServiceCard";
import { premiumServices } from "@/data/career";

export function CareerServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-xl text-muted-foreground">
            From initial discovery to final possession and beyond, our suite of services covers every aspect of your real estate journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {premiumServices.map((service) => (
            <CareerServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
