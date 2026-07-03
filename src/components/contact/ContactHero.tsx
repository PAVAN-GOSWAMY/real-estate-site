import * as React from "react";

export function ContactHero() {
  return (
    <section className="pt-32 pb-12 bg-surface">
      <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Whether you&apos;re looking for your dream home, seeking investment advice, or have questions about a project, our real estate experts are here to help.
        </p>
      </div>
    </section>
  );
}
