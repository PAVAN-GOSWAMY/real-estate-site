import * as React from "react";
import { membershipBenefits } from "@/data/membership";
import { Star, UserCheck, Shield, LineChart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Star: <Star className="w-8 h-8 text-primary-foreground" />,
  UserCheck: <UserCheck className="w-8 h-8 text-primary-foreground" />,
  Shield: <Shield className="w-8 h-8 text-primary-foreground" />,
  LineChart: <LineChart className="w-8 h-8 text-primary-foreground" />,
};

export function MembershipBenefits() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Become a Member?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Unlock a higher standard of service, exclusivity, and peace of mind with a Propteq membership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membershipBenefits.map((benefit) => (
            <div key={benefit.id} className="text-center">
              <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{benefit.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
