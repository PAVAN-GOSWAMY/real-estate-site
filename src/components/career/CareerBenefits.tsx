import * as React from "react";
import { careerBenefits } from "@/data/career";
import { siteConfig } from "@/config/site";
import { Building, TrendingUp, ShieldCheck, Briefcase } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const iconMap: Record<string, React.ReactNode> = {
  Building: <Building className="w-8 h-8 text-primary" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-primary" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-primary" />,
  Briefcase: <Briefcase className="w-8 h-8 text-primary" />,
};

export function CareerBenefits() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Why Our Team Loves Working Here
          </h2>
          <p className="text-white/80 text-lg">
            Unlock a higher standard of growth, collaboration, and peace of mind with a career at {siteConfig.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerBenefits.map((benefit, index) => (
            <FeatureCard 
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={iconMap[benefit.icon]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
