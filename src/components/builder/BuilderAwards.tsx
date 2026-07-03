import * as React from "react";
import { Builder } from "@/types";
import { Award } from "lucide-react";

interface BuilderAwardsProps {
  builder: Builder;
}

export function BuilderAwards({ builder }: BuilderAwardsProps) {
  if (!builder.awards || builder.awards.length === 0) return null;

  return (
    <section className="py-12 bg-accent/5">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builder.awards.map((award) => (
            <div key={award.id} className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{award.name}</h4>
                <p className="text-sm text-muted-foreground">{award.organization}</p>
                <p className="text-xs font-semibold text-primary mt-2">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
