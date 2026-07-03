import * as React from "react";
import { Check, Minus } from "lucide-react";

export function MembershipComparison() {
  const features = [
    { name: "Property Recommendations", essential: true, professional: true, elite: true },
    { name: "Project Alerts", essential: true, professional: true, elite: true },
    { name: "Dedicated Advisor", essential: false, professional: true, elite: true },
    { name: "Priority Site Visits", essential: false, professional: true, elite: true },
    { name: "Loan Guidance", essential: false, professional: true, elite: true },
    { name: "Personal Relationship Manager", essential: false, professional: false, elite: true },
    { name: "Exclusive Project Launches", essential: false, professional: false, elite: true },
    { name: "Premium Documentation", essential: false, professional: false, elite: true },
  ];

  const renderIcon = (value: boolean) => {
    return value ? (
      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
    ) : (
      <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
    );
  };

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Compare Membership Plans
          </h2>
          <p className="text-muted-foreground">
            Find the right level of support and expertise for your real estate journey.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-3xl border border-border/50 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 border-b border-r border-border/50 w-2/5 font-heading font-bold text-xl text-foreground">Features</th>
                <th className="p-6 border-b border-r border-border/50 text-center font-bold text-foreground">Essential</th>
                <th className="p-6 border-b border-r border-border/50 text-center font-bold text-primary bg-primary/5">Professional</th>
                <th className="p-6 border-b border-border/50 text-center font-bold text-foreground">Elite</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="hover:bg-accent/5 transition-colors">
                  <td className="p-6 border-b border-r border-border/50 text-foreground font-medium">{feature.name}</td>
                  <td className="p-6 border-b border-r border-border/50 text-center">{renderIcon(feature.essential)}</td>
                  <td className="p-6 border-b border-r border-border/50 text-center bg-primary/5">{renderIcon(feature.professional)}</td>
                  <td className="p-6 border-b border-border/50 text-center">{renderIcon(feature.elite)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion/Cards */}
        <div className="md:hidden space-y-6">
          {['Essential', 'Professional', 'Elite'].map((plan) => (
            <div key={plan} className={`p-6 rounded-2xl border bg-white shadow-sm ${plan === 'Professional' ? 'border-primary' : 'border-border/50'}`}>
              <h3 className="font-bold text-xl mb-4 text-center">{plan}</h3>
              <ul className="space-y-3">
                {features.map((f, i) => {
                  const hasFeature = plan === 'Essential' ? f.essential : plan === 'Professional' ? f.professional : f.elite;
                  return (
                    <li key={i} className="flex items-center justify-between text-sm">
                      <span className={hasFeature ? 'text-foreground' : 'text-muted-foreground line-through'}>{f.name}</span>
                      {renderIcon(hasFeature)}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
