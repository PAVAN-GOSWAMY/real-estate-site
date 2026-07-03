import * as React from "react";
import { Metadata } from "next";
import { membershipPlans } from "@/data/membership";
import { MembershipHero } from "@/components/membership/MembershipHero";
import { MembershipPlanCard } from "@/components/membership/MembershipPlanCard";
import { ServicesGrid } from "@/components/membership/ServicesGrid";
import { MembershipComparison } from "@/components/membership/MembershipComparison";
import { MembershipBenefits } from "@/components/membership/MembershipBenefits";
import { MembershipSuccessStories } from "@/components/membership/MembershipSuccessStories";
import { MembershipFAQ } from "@/components/membership/MembershipFAQ";
import { MembershipCTA } from "@/components/membership/MembershipCTA";

export const metadata: Metadata = {
  title: "Premium Real Estate Services & Memberships | Propteq Noida",
  description: "Explore our premium real estate advisory services, dedicated consulting, and membership plans designed for first-time buyers, investors, and NRIs in Noida.",
  alternates: {
    canonical: "/membership",
  }
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen">
      <MembershipHero />
      
      <section id="plans" className="py-24 bg-surface scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Membership Plans
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the level of service that aligns with your real estate goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-4">
            {membershipPlans.map((plan) => (
              <div key={plan.id} className="h-full">
                <MembershipPlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <MembershipComparison />
      <MembershipBenefits />
      <MembershipSuccessStories />
      <MembershipFAQ />
      <MembershipCTA />
    </main>
  );
}
