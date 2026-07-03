import * as React from "react";

export function BlogHero() {
  return (
    <section className="pt-32 pb-12 bg-surface">
      <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
          Real Estate Insights & Investment Guides
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Expert articles, investment strategies, project updates, and market insights focused on Noida and Greater Noida.
        </p>
      </div>
    </section>
  );
}
