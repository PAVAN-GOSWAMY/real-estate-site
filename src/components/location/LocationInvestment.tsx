import * as React from "react";
import { Location } from "@/types";
import { CheckCircle2 } from "lucide-react";

interface LocationInvestmentProps {
  location: Location;
}

export function LocationInvestment({ location }: LocationInvestmentProps) {
  if (!location.investmentHighlights || location.investmentHighlights.length === 0) return null;

  return (
    <section className="py-12 bg-accent/5">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Why Invest in {location.name}?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {location.investmentHighlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform duration-300">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
