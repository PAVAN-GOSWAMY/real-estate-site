import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import { PropertyBreadcrumb } from "@/components/property/PropertyBreadcrumb";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertySummary } from "@/components/property/PropertySummary";
import { PropertyHighlights } from "@/components/property/PropertyHighlights";
import { PropertyPricing } from "@/components/property/PropertyPricing";
import { PropertyAmenities } from "@/components/property/PropertyAmenities";
import { PropertyFloorPlans } from "@/components/property/PropertyFloorPlans";
import { PropertyLocationAdvantages } from "@/components/property/PropertyLocationAdvantages";
import { PropertyDeveloper } from "@/components/property/PropertyDeveloper";
import { PropertyFAQ } from "@/components/property/PropertyFAQ";
import { PropertyInquiryCard } from "@/components/property/PropertyInquiryCard";
import { PropertyBrochure, PropertyDisclaimer } from "@/components/property/PropertyExtras";
import { StickyCTA } from "@/components/contact/StickyCTA";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const property = properties.find((p) => p.slug === resolvedParams.slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.title} | Luxury Real Estate in ${property.location}`,
    description: property.description || `Explore ${property.title} in ${property.sector}, ${property.location}.`,
  };
}

export default async function PropertyDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const property = properties.find((p) => p.slug === resolvedParams.slug);

  if (!property) {
    notFound();
  }

  // Ensure we have an images array
  const images = property.images && property.images.length > 0 ? property.images : [property.thumbnail];

  return (
    <main className="min-h-screen bg-surface pb-24">
      <StickyCTA title={property.title} price={property.price} type="property" />
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        
        <PropertyBreadcrumb 
          location={property.location} 
          sector={property.sector} 
          title={property.title} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-16">
            
            <section id="gallery">
              <PropertyGallery images={images} />
            </section>

            <section id="summary">
              <PropertySummary property={property} />
            </section>

            {property.highlights && (
              <section id="highlights">
                <PropertyHighlights highlights={property.highlights} />
              </section>
            )}

            {property.configurationsList && (
              <section id="pricing">
                <PropertyPricing configurations={property.configurationsList} />
              </section>
            )}

            <section id="brochure">
              <PropertyBrochure />
            </section>

            {property.amenityGroups && (
              <section id="amenities">
                <PropertyAmenities groups={property.amenityGroups} />
              </section>
            )}

            {property.floorPlans && (
              <section id="floor-plans">
                <PropertyFloorPlans floorPlans={property.floorPlans} />
              </section>
            )}

            {property.locationAdvantages && (
              <section id="location">
                <PropertyLocationAdvantages advantages={property.locationAdvantages} />
              </section>
            )}

            {property.developerProfile && (
              <section id="developer">
                <PropertyDeveloper profile={property.developerProfile} />
              </section>
            )}

            {property.faqs && (
              <section id="faqs">
                <PropertyFAQ faqs={property.faqs} />
              </section>
            )}
            
            <PropertyDisclaimer />
          </div>

          {/* Sticky Right Sidebar */}
          <div className="lg:col-span-4 relative">
            {/* The Inquiry Card uses sticky top-24 internally */}
            <PropertyInquiryCard 
              title={property.title} 
              price={property.price} 
            />
          </div>
          
        </div>
      </div>
    </main>
  );
}
