import * as React from "react";
import { Builder } from "@/types";
import { Button } from "@/components/ui/button";

interface BuilderCTAProps {
  builder: Builder;
}

export function BuilderCTA({ builder }: BuilderCTAProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Interested in {builder.name} Projects?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Get in touch with our real estate experts for the best advice, exclusive offers, and personalized site visits.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full">
            Explore Projects
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 rounded-full">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
