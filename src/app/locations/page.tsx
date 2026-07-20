import * as React from "react";
import { Metadata } from "next";
import { locations } from "@/data/locations";
import { LocationCard } from "@/components/location/LocationCard";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Explore Premium Real Estate Locations in Noida | ${siteConfig.name}`,
  description: "Discover top residential and commercial projects across Noida, Greater Noida, and Yamuna Expressway.",
  openGraph: {
    title: `Explore Premium Real Estate Locations in Noida | ${siteConfig.name}`,
    description: "Discover top residential and commercial projects across Noida, Greater Noida, and Yamuna Expressway.",
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-surface pb-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Explore Properties by Location
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover premium residential and commercial projects across Noida and Greater Noida&apos;s most sought-after sectors and micro-markets.
          </p>
        </div>

        {/* Note: Search UI could go here as per requirements, but sticking to UI only */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="flex bg-white rounded-full p-2 border border-border/50 shadow-sm">
            <input 
              type="text" 
              placeholder="Search by Sector, Area, or Micro Market (e.g., Sector 150)" 
              className="flex-1 bg-transparent px-4 py-2 outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-heading font-bold text-foreground">Featured Locations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </main>
  );
}
