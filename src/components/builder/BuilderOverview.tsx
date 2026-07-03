import * as React from "react";
import { Builder } from "@/types";

interface BuilderOverviewProps {
  builder: Builder;
}

export function BuilderOverview({ builder }: BuilderOverviewProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">About {builder.name}</h2>
          <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed">
            <p>{builder.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
