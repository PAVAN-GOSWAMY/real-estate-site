import * as React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { builders } from "@/data/builders";

import { BuilderHero } from "@/components/builder/BuilderHero";
import { BuilderStats } from "@/components/builder/BuilderStats";
import { BuilderOverview } from "@/components/builder/BuilderOverview";
import { BuilderProjects } from "@/components/builder/BuilderProjects";
import { BuilderAwards } from "@/components/builder/BuilderAwards";
import { BuilderTestimonials } from "@/components/builder/BuilderTestimonials";
import { BuilderFAQ } from "@/components/builder/BuilderFAQ";
import { BuilderCTA } from "@/components/builder/BuilderCTA";
import { BuilderBreadcrumb } from "@/components/builder/BuilderBreadcrumb";
import { StickyCTA } from "@/components/contact/StickyCTA";

interface BuilderPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: BuilderPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const builder = builders.find((b) => b.slug === resolvedParams.slug);

  if (!builder) {
    return {
      title: "Builder Not Found",
    };
  }

  return {
    title: builder.seo?.title || `${builder.name} - Projects in Noida`,
    description: builder.seo?.description || builder.description.substring(0, 160),
    openGraph: {
      title: builder.name,
      description: builder.description,
      images: [builder.logo],
    },
  };
}

export async function generateStaticParams() {
  return builders.map((builder) => ({
    slug: builder.slug,
  }));
}

export default async function BuilderDetailsPage({ params }: BuilderPageProps) {
  const resolvedParams = await params;
  const builder = builders.find((b) => b.slug === resolvedParams.slug);

  if (!builder) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface pb-24">
      <StickyCTA title={`Interested in ${builder.name} projects?`} type="builder" />
      <div className="container mx-auto px-4 md:px-6 mt-6 md:mt-8">
        <BuilderBreadcrumb builder={builder} />
      </div>
      <BuilderHero builder={builder} />
      <BuilderStats builder={builder} />
      <BuilderOverview builder={builder} />
      <BuilderProjects builder={builder} />
      <BuilderAwards builder={builder} />
      <BuilderTestimonials builder={builder} />
      <BuilderFAQ builder={builder} />
      <BuilderCTA builder={builder} />
    </main>
  );
}
