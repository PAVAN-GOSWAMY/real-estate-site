import { Hero } from "@/components/home/Hero";
import { PropertySearch } from "@/components/search/PropertySearch";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { TopLocations } from "@/components/home/TopLocations";
import { Container } from "@/components/layout/wrappers";

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="relative z-20 px-4 md:px-8">
        <PropertySearch />
      </Container>
      <FeaturedProperties />
      <TopLocations />
    </>
  );
}
