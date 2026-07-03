import * as React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/data/locations";

import { LocationHero } from "@/components/location/LocationHero";
import { LocationOverview } from "@/components/location/LocationOverview";
import { LocationConnectivity } from "@/components/location/LocationConnectivity";
import { LocationEssentials } from "@/components/location/LocationEssentials";
import { LocationProjects } from "@/components/location/LocationProjects";
import { LocationBuilders } from "@/components/location/LocationBuilders";
import { LocationInvestment } from "@/components/location/LocationInvestment";
import { LocationInsights } from "@/components/location/LocationInsights";
import { LocationFAQ } from "@/components/location/LocationFAQ";
import { LocationCTA } from "@/components/location/LocationCTA";
import { LocationBreadcrumb } from "@/components/location/LocationBreadcrumb";
import { StickyCTA } from "@/components/contact/StickyCTA";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: LocationPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const location = locations.find((loc) => loc.slug === resolvedParams.slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: location.seo.title,
    description: location.seo.description,
    openGraph: {
      title: location.seo.title,
      description: location.seo.description,
      images: [location.heroImage],
    },
    alternates: {
      canonical: `/locations/${location.slug}`,
    }
  };
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationDetailsPage({ params }: LocationPageProps) {
  const resolvedParams = await params;
  const location = locations.find((loc) => loc.slug === resolvedParams.slug);

  if (!location) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface pb-24">
      <StickyCTA title={`Explore properties in ${location.name}`} type="location" />
      <div className="container mx-auto px-4 md:px-6 mt-6 md:mt-8">
        <LocationBreadcrumb location={location} />
      </div>
      <LocationHero location={location} />
      <LocationOverview location={location} />
      <LocationConnectivity location={location} />
      <LocationEssentials location={location} />
      <LocationInvestment location={location} />
      <LocationInsights location={location} />
      <LocationProjects location={location} />
      <LocationBuilders location={location} />
      <LocationFAQ location={location} />
      <LocationCTA location={location} />
    </main>
  );
}
