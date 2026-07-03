import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/layout/wrappers";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { properties } from "@/data/properties";

export function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured);

  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader className="mb-0 max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore handpicked residential and commercial projects across Noida and Greater Noida from trusted developers.
            </p>
          </SectionHeader>
          <Link
            href="/properties"
            className="inline-flex items-center text-sm font-bold text-accent hover:text-primary transition-colors group whitespace-nowrap"
          >
            View All Properties
            <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Property Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
