import * as React from "react";
import { Location } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LocationCTAProps {
  location: Location;
}

export function LocationCTA({ location }: LocationCTAProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Ready to invest in {location.name}?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Our experts can help you find the best property in {location.city}. Let us guide you through exclusive offers and personalized site visits.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/properties">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full">
              Explore All Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 rounded-full">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
