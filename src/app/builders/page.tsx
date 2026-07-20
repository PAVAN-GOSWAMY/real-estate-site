import * as React from "react";
import { Metadata } from "next";
import { builders } from "@/data/builders";
import { BuilderCard } from "@/components/builder/BuilderCard";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Top Real Estate Builders & Developers in Noida | ${siteConfig.name}`,
  description: "Explore the top real estate developers and builders in Noida, Greater Noida, and Yamuna Expressway.",
  openGraph: {
    title: `Top Real Estate Builders & Developers in Noida | ${siteConfig.name}`,
    description: "Explore the top real estate developers and builders in Noida, Greater Noida, and Yamuna Expressway.",
  },
};

export default function BuildersPage() {
  return (
    <main className="min-h-screen bg-accent/5 pb-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Top Builders & Developers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover trusted real estate developers shaping the skyline of Noida, Greater Noida, and the Yamuna Expressway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {builders.map((builder) => (
            <BuilderCard key={builder.id} builder={builder} />
          ))}
        </div>
      </div>
    </main>
  );
}
